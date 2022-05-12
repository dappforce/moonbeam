use frame_support::dispatch::Weight;
use frame_support::pallet_prelude;
use frame_support::pallet_prelude::{DispatchClass, Get};
use frame_support::traits::EstimateNextSessionRotation;
use nimbus_primitives::EventHandler;
use pallet_session::{ShouldEndSession, SessionManager};
use sp_runtime::Permill;
use sp_runtime::traits::Saturating;
use sp_staking::SessionIndex;
use sp_std::vec::Vec;
use crate::{Config, Pallet, Round};

impl<T: Config> pallet_authorship::EventHandler<T::AccountId, T::BlockNumber> for Pallet<T> {
    fn note_author(author: T::AccountId) {
        <Self as nimbus_primitives::EventHandler<T::AccountId>>::note_author(author);
    }

    fn note_uncle(author: T::AccountId, age: T::BlockNumber) {
        // ignored
    }
}


impl<T: Config> ShouldEndSession<T::BlockNumber> for Pallet<T> {
    fn should_end_session(now: T::BlockNumber) -> bool {
        let round = <Round<T>>::get();
        round.should_update(now)
    }
}


impl<T: Config> EstimateNextSessionRotation<T::BlockNumber> for Pallet<T> {
    fn average_session_length() -> T::BlockNumber {
        <Round<T>>::get().length.into()
    }

    fn estimate_current_session_progress(now: T::BlockNumber) -> (Option<Permill>, Weight) {
        let round = <Round<T>>::get();
        let passed_blocks = now.saturating_sub(round.first);

        (
            Some(Permill::from_rational(passed_blocks, round.length.into())),
            // One read for the round info, blocknumber is read free
            T::DbWeight::get().reads(1),
        )
    }

    fn estimate_next_session_rotation(_now: T::BlockNumber) -> (Option<T::BlockNumber>, Weight) {
        let round = <Round<T>>::get();

        (
            Some(round.first + round.length.into()),
            // One read for the round info, blocknumber is read free
            T::DbWeight::get().reads(1),
        )
    }
}

impl<T: Config> SessionManager<T::AccountId> for Pallet<T> {
    /// 1. A new session starts.
    /// 2. In hook new_session: Read the current top n candidates from the
    ///    TopCandidates and assign this set to author blocks for the next
    ///    session.
    /// 3. AuRa queries the authorities from the session pallet for
    ///    this session and picks authors on round-robin-basis from list of
    ///    authorities.
    fn new_session(new_index: SessionIndex) -> Option<Vec<T::AccountId>> {
        log::debug!(
				"assembling new collators for new session {} at #{:?}",
				new_index,
				<frame_system::Pallet<T>>::block_number(),
			);

        frame_system::Pallet::<T>::register_extra_weight_unchecked(
            T::DbWeight::get().reads(2),
            DispatchClass::Mandatory,
        );

        let collators = Pallet::<T>::selected_candidates().to_vec();
        if collators.is_empty() {
            // we never want to pass an empty set of collators. This would brick the chain.
            log::error!("💥 keeping old session because of empty collator set!");
            None
        } else {
            Some(collators)
        }
    }

    fn end_session(_end_index: SessionIndex) {
        // we too are not caring.
    }

    fn start_session(_start_index: SessionIndex) {
        // we too are not caring.
    }
}