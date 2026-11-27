export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	roacheswhenyouhitthemwiththatdollarstorebossfight: {
		onStart(pokemon) {
			this.add('-start', pokemon, 'ability: Roaches When You Hit Them With That Dollar Store Boss Fight');
			this.effectState.counter = 10;
			this.hint('You\'ve made a grave mistake...')
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns && this.effectState.counter) {
				this.effectState.counter--;
				if (!this.effectState.counter) {
					this.add('-end', pokemon, 'Roaches When You Hit Them With That Dollar Store Boss Fight');
					delete this.effectState.counter;
				}
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (this.effectState.counter) {
				return this.chainModify(0.25);
			}
		},
		onModifyDef(def, pokemon) {
			if (this.effectState.counter) {
				return this.chainModify(0.25);
			}
		},
		onModifySpA(spa, pokemon) {
			if (this.effectState.counter) {
				return this.chainModify(0.25);
			}
		},
		onModifySpD(spd, pokemon) {
			if (this.effectState.counter) {
				return this.chainModify(0.25);
			}
		},
		onModifySpe(spe, pokemon) {
			if (this.effectState.counter) {
				return this.chainModify(0.25);
			}
		},
		onEnd(pokemon) {
			if (pokemon.beingCalledBack || !this.effectState.counter) return;
			this.add('-end', pokemon, 'Roaches When You Hit Them With That Dollar Store Boss Fight', '[silent]');
		},
		flags: {},
		name: "Roaches When You Hit Them With That Dollar Store Boss Fight",
		rating: -1,
		num: -9001,
	},
};
