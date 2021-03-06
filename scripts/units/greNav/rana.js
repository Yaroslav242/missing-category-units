const ais = this.global.mcu.ai;

const SuNavT1 = extendContent(UnitType, "rana", {});
SuNavT1.constructor = () => extend(UnitWaterMove, {});
SuNavT1.defaultController = ais.groundFireFighterAI;
SuNavT1.fireRange = 20;
SuNavT1.abilities.add(new RepairFieldAbility(10, 60 * 5, 24));
SuNavT1.abilities.add(new ShieldRegenFieldAbility(20, 60, 60 * 12, 24));

SuNavT1.ammoType = AmmoTypes.powerLow;