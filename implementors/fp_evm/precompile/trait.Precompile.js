(function() {var implementors = {};
implementors["parachain_staking_precompiles"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"parachain_staking_precompiles/struct.ParachainStakingWrapper.html\" title=\"struct parachain_staking_precompiles::ParachainStakingWrapper\">ParachainStakingWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a> + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;H160&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Runtime as <a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt;::<a class=\"type\" href=\"parachain_staking/pallet/trait.Config.html#associatedtype.Currency\" title=\"type parachain_staking::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parachain_staking/pallet/enum.Call.html\" title=\"enum parachain_staking::pallet::Call\">Call</a>&lt;Runtime&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["parachain_staking_precompiles::ParachainStakingWrapper"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()