const mapMap = {
  /**
   * @property maps
   * @type {Array.<{name: String, maps: Array.<{fileName: String, name: String}>}>}
   */
  maps: [
    {
      name: "Core - Ascalon [Regrown]",
      maps: [
        { fileName: "131944.data", name: "(City) Black Citadel" },
        { fileName: "196585.data", name: "(City) Black Citadel [MapRegrownCitadel]" },
        { fileName: "1968107.data", name: "(City) Black Citadel" },
        { fileName: "126118.data", name: "(1-15) Plains of Ashford" },
        { fileName: "188591.data", name: "(1-15) Plains of Ashford [MapRegrownAshford]" },
        { fileName: "127888.data", name: "(15-25) Diessa Plateau" },
        { fileName: "190490.data", name: "(15-25) Diessa Plateau [MapRegrownRange]" },
        { fileName: "283574.data", name: "(30-40) Fields of Ruin [MapRegrownHawke]" },
        { fileName: "282668.data", name: "(40-50) Iron Marches [MapRegrownGullet]" },
        { fileName: "280025.data", name: "(50-60) Blazeridge Steppes [MapRegrownBrand]" },
        { fileName: "281313.data", name: "(60-70) Fireheart Rise [MapRegrownFlame]" }
      ]
    },
    {
      name: "Core - Kryta [Valley]",
      maps: [
        { fileName: "128151.data", name: "(City) Divinity's Reach" },
        { fileName: "191265.data", name: "(City) Divinity's Reach [MapValleyDivinity]" },
        { fileName: "1968748.data", name: "(City) Divinity's Reach" },
        { fileName: "129524.data", name: "(1-15) Queensdale" },
        { fileName: "192711.data", name: "(1-15) Queensdale [MapValleyHill]" },
        { fileName: "130970.data", name: "(15-25) Kessex Hills" },
        { fileName: "194288.data", name: "(15-25) Kessex Hills [MapValleyWilderness]" },
        { fileName: "861815.data", name: "(15-25) Kessex Hills [MapValleyWildernessFortSalma]" },
        { fileName: "2737234.data", name: "(15-25) Kessex Hills [MapValleyWildernessTower]" },
        { fileName: "289176.data", name: "(25-35) Gendarran Fields, Vigil Headquarters [MapValleySettlement]" },
        { fileName: "191000.data", name: "(City) Lion's Arch [MapValleyArch]" },
        { fileName: "1796999.data", name: "(City) Lion's Arch [MapValleyArchKiel]" },
        { fileName: "1968576.data", name: "(City) Lion's Arch" },
        { fileName: "287870.data", name: "(35-45) Harathi Hinterlands [MapValleyHeadland]" },
        { fileName: "286945.data", name: "(45-55) Bloodtide Coast [MapValleyCoast]" },
        { fileName: "295005.data", name: "(45-55) Chantry of Secrets [MapValleyWhisper]" },
        { fileName: "520479.data", name: "(80) Southsun Cove, Crab Toss, Southsun Survival [MapEventValleyLost]" }
      ]
    },
    {
      name: "Core - Shiverpeak Mountains [Alpine]",
      maps: [
        { fileName: "132434.data", name: "(City) Hoelbrak, Keg Brawl" },
        { fileName: "197122.data", name: "(City) Hoelbrak, Keg Brawl [MapAlpineHall]" },
        { fileName: "1966018.data", name: "(City) Hoelbrak, Keg Brawl" },
        { fileName: "125199.data", name: "(1-15) Wayfarer Foothills" },
        { fileName: "187611.data", name: "(1-15) Wayfarer Foothills [MapAlpineSnowline]" },
        { fileName: "124093.data", name: "(15-25) Snowden Drifts" },
        { fileName: "186397.data", name: "(15-25) Snowden Drifts [MapAlpinePowder]" },
        { fileName: "277587.data", name: "(25-40) Lornar's Pass, The Durmand Priory [MapAlpineSlope]" },
        { fileName: "275155.data", name: "(40-50) Dredgehaunt Cliffs [MapAlpineCrest]" },
        { fileName: "278717.data", name: "(50-60) Timberline Falls [MapAlpineTimberland]" },
        { fileName: "846866.data", name: "(50-60) Timberline Falls" },
        { fileName: "276252.data", name: "(70-80) Frostgorge Sound [MapAlpineGlacier]" },
        { fileName: "295282.data", name: "(HoM) Eye of the North [MapAlpineMonument]" }
      ]
    },
    {
      name: "Core - Tarnished Coast [Wetland]",
      maps: [
        { fileName: "198272.data", name: "(City) Rata Sum [MapWetlandComplex]" },
        { fileName: "1968896.data", name: "(City) Rata Sum" },
        { fileName: "198076.data", name: "(City) The Grove [MapWetlandGrove]" },
        { fileName: "1969341.data", name: "(City) The Grove" },
        { fileName: "195149.data", name: "(1-15) Caledon Forest [MapWetlandBayou]" },
        { fileName: "195493.data", name: "(1-15) Metrica Province [MapWetlandRiverside]" },
        { fileName: "293307.data", name: "(15-25) Brisban Wildlands [MapWetlandGrotto]" },
        { fileName: "292254.data", name: "(55-65) Sparkfly Fen [MapWetlandGlade]" },
        { fileName: "291064.data", name: "(60-70) Mount Maelstrom [MapWetlandCape]" }
      ]
    },
    {
      name: "Core - Ruins of Orr [Risen]",
      maps: [
        { fileName: "284829.data", name: "(70-75) Straits of Devastation [MapRisenBeachhead]" },
        { fileName: "285089.data", name: "(75-80) Malchor's Leap [MapRisenCliff]" },
        { fileName: "285634.data", name: "(80) Cursed Shore [MapRisenShore]" }
      ]
    },
    {
      name: "Core - Personal Story",
      maps: [
        { fileName: "295962.data", name: "(20-60) A Vision of Darkness, A Light in the Darkness <The Grove, Cursed Shore> [MapWetlandDestiny]" },
        { fileName: "1019669.data", name: "(40-60) Old Lion's Arch [MapValleyArchOrig]" },
        { fileName: "294938.data", name: "(60) Claw Island [MapValleyClaw]" },
        { fileName: "1018612.data", name: "(70) Forging the Pact <Timberline Falls> [MapAlpineTimberlandBeforeConcordiaVines]" },
        { fileName: "295179.data", name: "(80) Temple of the Forgotten God <Straits of Devastation> [MapRisenBeachheadAbaddon]" },
        { fileName: "473765.data", name: "(80) Victory or Death <The Ruined City of Arah> [MapRisenDragonStory]" }
      ]
    },
    {
      name: "Core - Dungeon",
      maps: [
        { fileName: "126840.data", name: "(30-35) Ascalonian Catacombs" },
        { fileName: "189364.data", name: "(30-35) Ascalonian Catacombs [MapRegrownCatacomb]" },
        { fileName: "287214.data", name: "(40-45) Caudecus's Manor <Queensdale> [MapValleyEstate]" },
        { fileName: "291284.data", name: "(50) Twilight Arbor [MapWetlandGarden]" },
        { fileName: "645968.data", name: "(55-80) Twilight Arbor <Twilight Arbor> [MapWetlandGardenRepeat]" },
        { fileName: "275474.data", name: "(60-65) Sorrow's Embrace [MapAlpineFurnace]" },
        { fileName: "284039.data", name: "(70-75) Citadel of Flame [MapRegrownShaman]" },
        { fileName: "276520.data", name: "(76-80) Honor of the Waves [MapAlpineIceberg]" },
        { fileName: "293606.data", name: "(78-80) Crucible of Eternity [MapWetlandWeapon]" },
        { fileName: "473930.data", name: "(80) The Ruined City of Arah [MapRisenDragonRepeat]" }
      ]
    },
    {
      name: "(LW1) Living World Season 1: Scarlet's War - (SM) Strike Mission",
      maps: [
        { fileName: "2771534.data", name: "(Lounge) Memory of Old Lion's Arch <Old Lion's Arch> [MapValleyArchProbed]" },
        { fileName: "568778.data", name: "(LW1.E1) Cragstead <Wayfarer Foothills, Diessa Plateau> [MapAlpineEnclave]" },
        { fileName: "580061.data", name: "(LW1.E1) Molten Furnace [MapFlameFrost]" },
        { fileName: "2690992.data", name: "(LW1.E2) Memorials on the Pyre, The Scene of the Crime <Old Lion's Arch> [MapValleyArchDragon]" },
        { fileName: "595722.data", name: "(LW1.E2) Aetherblade Retreat [MapValleyArchDungeon]" },
        { fileName: "2711089.data", name: "(LW1.E3) Scarlet's Playhouse <The Crown Pavilion> [MapJubileeArena-2]" },
        { fileName: "672138.data", name: "(LW1.E4) The Nightmare Unveiled <Kessex Hills> [MapValleyWildernessKraitTowerInstance]" },
        { fileName: "679089.data", name: "(LW1.E4) The Tower of Nightmares [MapValleyWildernessKraitTowerInterior]" },
        { fileName: "2469960.data", name: "(LW1.E5) The Twisted Marionette <Lornar's Pass> [MapAlpineSlopeMarionette]" },
        { fileName: "2770873.data", name: "(LW1.E5) The Battle For Lion's Arch <Old Lion's Arch> [MapValleyArch2]" },
        { fileName: "2773298.data", name: "(LW1.E5) North Evacuation Camp <Gendarran Fields> [MapValleySettlementFeb2014]" },
        { fileName: "814803.data", name: "(LW1.E5) Lion's Arch: Honored Guests <Old Lion's Arch> [MapValleyArch3]" },
        { fileName: "2771205.data", name: "(SM) Old Lion's Court <The Battle For Lion's Arch> [MapValleyArch2Strike]" }
      ]
    },
    {
      name: "(LW2) Living World Season 2: Glint's Prophecy",
      maps: [
        { fileName: "836211.data", name: "(LW2.E1, LW2.E2, LW2.E4) Dry Top [MapDryTop]" },
        { fileName: "861770.data", name: "(LW2.E1, LW2.E2, LW2.E4) Dry Top [MapDryTopE2]" },
        { fileName: "909361.data", name: "(LW2.E5, LW2.E6, LW2.E7, LW2.E8) The Silverwastes [MapSandCastle]" },
        { fileName: "996202.data", name: "(LW2.E5, LW2.E6, LW2.E7, LW2.E8) The Silverwastes [MapSandcastleToFleet]" },
        { fileName: "908730.data", name: "(LW2.E5.4) Hidden Arcana <The Durmand Priory> [MapSandGrain]" },
        { fileName: "922320.data", name: "(LW2.E7.2) Meeting the Asura <Metrica Province> [MapWetlandRiversideAsuraFirstContact]" }
      ]
    },
    {
      name: "(X1) Guild Wars 2: Heart of Thorns - (Z) Zone - Maguuma Jungle [Jungle]",
      maps: [
        { fileName: "969663.data", name: "(Z.1) Verdant Brink [MapJungleFleet]" },
        { fileName: "1263739.data", name: "(Z.2) Auric Basin [MapJungleGold]" },
        { fileName: "1264291.data", name: "(Z.3) Tangled Depths [MapJungleRoots]" },
        { fileName: "1262310.data", name: "(Z.4) Dragon's Stand [MapJungleArmy]" },
        { fileName: "1262460.data", name: "(X1.16) Hearts and Minds [MapJungleArmyNightmare]" }
      ]
    },
    {
      name: "(LW3) Living World Season 3: Glint's Legacy",
      maps: [
        { fileName: "1472635.data", name: "(LW3.E1) Bloodstone Fen [MapJungleBloodstone]" },
        { fileName: "1498071.data", name: "(LW3.E2.1) Taimi's Game [MapHoloRoom]" },
        { fileName: "1498578.data", name: "(LW3.E2) Ember Bay [MapFireIsland]" },
        { fileName: "1605211.data", name: "(LW3.E3) Bitterfrost Frontier [MapAlpineTundra]" },
        { fileName: "1646520.data", name: "(LW3.E4) Lake Doric [MapValleyPort]" },
        { fileName: "1645474.data", name: "(LW3.E4.6) Confessor's End <Caudecus's Manor> [MapValleyEstatePort]" },
        { fileName: "1682493.data", name: "(LW3.E5) Draconis Mons [MapLavaLamp]" },
        { fileName: "1682763.data", name: "(LW3.E5.5) Heart of the Volcano [MapLavaLampInstance2]" },
        { fileName: "1734839.data", name: "(LW3.E6.1) White Mantle Hideout [MapS0E6AspectHunt]" },
        { fileName: "1735440.data", name: "(LW3.E6.2) Shining Blade Headquarters [MapValleyBlade]" },
        { fileName: "1735346.data", name: "(LW3.E6) Siren's Landing [MapReclaimed]" }
      ]
    },
    {
      name: "(X2) Guild Wars 2: Path of Fire - (Z) Zone - Crystal Desert [Desert]",
      maps: [
        { fileName: "1794574.data", name: "(Z.1) Crystal Oasis [MapDesertOasis]" },
        { fileName: "1833034.data", name: "(Z.2) Desert Highlands [MapDesertHighlands]" },
        { fileName: "1840368.data", name: "(X2.7, PoF.OS) Facing the Truth: The Sanctum, The Dark Library [MapDesertSanctum]" },
        { fileName: "1840103.data", name: "(Z.3) Elon Riverlands [MapDesertRiver]" },
        { fileName: "1833726.data", name: "(X2.8, PoF.9) The Way Forward, The Departing <Elon Riverlands> [MapDesertMists]" },
        { fileName: "1842533.data", name: "(Z.4) The Desolation [MapDesertTorment]" },
        { fileName: "1839188.data", name: "(Z.5) Domain of Vabbi [MapDesertPalace]" }
      ]
    },
    {
      name: "(LW4) Living World Season 4: Rise of Kralkatorrik",
      maps: [
        { fileName: "1903523.data", name: "(LW4.E1.1) Eye of the Brandstorm <Crystal Oasis> [MapDesertOasisInstanceS4E1]" },
        { fileName: "1902235.data", name: "(LW4.E1) Domain of Istan [MapDesertJewel]" },
        { fileName: "1901428.data", name: "(LW4.E1.6) Fahranur, the First City [MapDesertCity]" },
        { fileName: "1954984.data", name: "(LW4.E2.1) Tracking the Scientist <Desert Highlands> [MapDesertArchipelago_Chapter1]" },
        { fileName: "1955224.data", name: "(LW4.E2.2) The Test Subject <Sandswept Isles> [MapDesertArchipelago_Chapter2]" },
        { fileName: "1957526.data", name: "(LW4.E2) Sandswept Isles [MapDesertArchipelagoLargeMap]" },
        { fileName: "1955471.data", name: "(LW4.E2.5) The Charge <Sandswept Isles> [MapDesertArchipelago_Chapter5]" },
        { fileName: "1955642.data", name: "(LW4.E2.5) ??? <Divinity's Reach> [MapDesertArchipelago_Chapter5Boss_1]" },
        { fileName: "1955915.data", name: "(LW4.E2.5) ??? <Mount Maelstrom> [MapDesertArchipelago_Chapter5Boss_2]" },
        { fileName: "1956140.data", name: "(LW4.E2.5) ??? <Frostgorge Sound> [MapDesertArchipelago_Chapter5Boss_3]" },
        { fileName: "1956245.data", name: "(LW4.E2.5) ERROR: SIGNAL LOST [MapDesertArchipelago_Chapter5Boss_4]" },
        { fileName: "2005467.data", name: "(LW4.E3.1) Seized <Crystal Oasis> [MapDesertOasisS4E3]" },
        { fileName: "2004704.data", name: "(LW4.E3) Domain of Kourna [MapDesertMoon]" },
        { fileName: "2044320.data", name: "(LW4.E4) Jahai Bluffs, Sun's Refuge [MapDesertBluffs]" },
        { fileName: "2044502.data", name: "(LW4.E4.5) Storm Tracking [MapDesertBluffsCh5]" },
        { fileName: "2093791.data", name: "(LW4.E5.1) Scion & Champion <Hidden Arcana> [MapThe_Begining]" },
        { fileName: "2092435.data", name: "(LW4.E5) Thunderhead Peaks [MapAlpineKeep]" },
        { fileName: "2092812.data", name: "(LW4.E5.3) The Crystal Blooms <Thunderhead Peaks> [MapAlpineKeepInstance]" },
        { fileName: "2093450.data", name: "(LW4.E5.5) The Crystal Dragon <The Crystal Blooms> [MapAlpineKeepInstanceKralk]" },
        { fileName: "2124612.data", name: "(LW4.PP) Mists Rift [MapBrandedMistfight]" },
        { fileName: "2146312.data", name: "(LW4.E6.1) The End <Thunderhead Peaks> [MapDesertDragonfallCh01]" },
        { fileName: "2146346.data", name: "(LW4.E6.1) Dragonflight [MapDesertDragonfallCh02]" },
        { fileName: "2146125.data", name: "(LW4.E6) Dragonfall [MapDesertDragonfall]" },
        { fileName: "2146510.data", name: "(LW4.E6.5) Descent [MapDesertDragonfallFinalInstance]" },
        { fileName: "2146376.data", name: "(LW4.E6.5) Epilogue [MapDesertDragonfallEpilogue]" }
      ]
    },
    {
      name: "(LW5) Living World Season 5: The Icebrood Saga - (SM) Strike Mission, (DRM) Dragon Response Missions",
      maps: [
        { fileName: "2203371.data", name: "(LW5.E0, SM.1) Grothmar Valley, Shiverpeaks Pass [MapRegrownBlood]" },
        { fileName: "2251232.data", name: "(LW5.E1, LW5.E2) Bjora Marches [MapBjoraMarchesCombined]" },
        { fileName: "2224355.data", name: "(SM.2) Voice of the Fallen and Claw of the Fallen [MapKodanBNB]" },
        { fileName: "2224381.data", name: "(SM.3) Fraenir of Jormag [Mapshamanbnb]" },
        { fileName: "2224406.data", name: "(SM.4) Boneskinner [MapWendigoBNB]" },
        { fileName: "2249817.data", name: "(LW5.E2.5) Voice in the Deep [MapAlpineMarchesEp2FinalInstance]" },
        { fileName: "2251486.data", name: "(SM.5) Whisper of Jormag [MapWhisperofJormag]" },
        { fileName: "2251447.data", name: "(Lobby) Eye of the North <Eye of the North> [MapAlpineMonumentDragon]" },
        { fileName: "2272807.data", name: "(LW5.VotP.1, SM.6) Forging Steel [MapAlpineClimb]" },
        { fileName: "2273128.data", name: "(LW5.VotP.2) Darkrime Delves [MapAlpineDelves]" },
        { fileName: "2298865.data", name: "(LW5.E3) Drizzlewood Coast [MapAlpineCascades]" },
        { fileName: "2318029.data", name: "(LW5.E3, LW5.E4) Drizzlewood Coast [MapAlpineCascades02]" },
        { fileName: "2299088.data", name: "(SM.7) Cold War <Drizzlewood Coast> [MapAlpineCascadesStrike]" },
        { fileName: "2369582.data", name: "(LW5.E5.1) Primordus Rising <Rata Sum> [MapWetlandComplexE5Story]" },
        { fileName: "2370614.data", name: "(LW5.E5.3, DRM.1) Metrica Province <Metrica Province> [MapWetlandRiversideS5E5]" },
        { fileName: "2370017.data", name: "(LW5.E5.3, DRM.2) Brisban Wildlands <Brisban Wildlands> [MapWetlandGrottoS5E5]" },
        { fileName: "2369116.data", name: "(LW5.E5.3, DRM.3) Gendarran Fields <Gendarran Fields> [MapValleySettlementS5E5]" },
        { fileName: "2366776.data", name: "(LW5.E5.4, DRM.4) Fields of Ruin <Fields of Ruin> [MapRegrownHawkeS5E5]" },
        { fileName: "2364032.data", name: "(LW5.E5.4, DRM.5) Thunderhead Peaks <Thunderhead Peaks> [MapAlpineKeepS5E5]" },
        { fileName: "2368400.data", name: "(LW5.E5.5, DRM.6) Lake Doric <Lake Doric> [MapValleyPortS5E5]" },
        { fileName: "2365787.data", name: "(LW5.E5.5, DRM.7) Snowden Drifts <Snowden Drifts> [MapAlpinePowderS5E5]" },
        { fileName: "2369398.data", name: "(LW5.E5.6, DRM.8) Caledon Forest <Caledon Forest> [MapWetlandBayouS5E5]" },
        { fileName: "2414140.data", name: "(LW5.E5.7) Wildfire <Heart of the Volcano> [MapLavaLampInstance_S5E5]" },
        { fileName: "2367211.data", name: "(LW5.E5.8, DRM.9) Bloodtide Coast <Bloodtide Coast> [MapValleyCoastS5E5]" },
        { fileName: "2366368.data", name: "(LW5.E5.9, DRM.10) Fireheart Rise <Fireheart Rise> [MapRegrownFlameS5E5]" },
        { fileName: "2434582.data", name: "(LW5.E5) Dragonstorm [MapDragonFight]" },
        { fileName: "2434675.data", name: "(LW5.E5.11) Champion's End <Dragonstorm> [MapDragonFightStoryInstance]" }
      ]
    },
    {
      name: "(X3) Guild Wars 2: End of Dragons - (Z) Zone, (SM) Strike Mission - Cantha [Cantha]",
      maps: [
        { fileName: "2669133.data", name: "(Lounge) Thousand Seas Pavilion [MapMTXLounge]" },
        { fileName: "2639738.data", name: "(X3.1) Old Friends <Lornar's Pass> [MapAlpineSlopeX03]" },
        { fileName: "2639795.data", name: "(X3.1) Aetherblade Armada [MapCanthaArmada]" },
        { fileName: "2647516.data", name: "(Z.1) Seitung Province [MapCanthaShingJea]" },
        { fileName: "2649141.data", name: "(SM.1) Aetherblade Hideout <Seitung Province> [MapMaiTrin]" },
        { fileName: "2645519.data", name: "(Z.2) New Kaineng City [MapCanthaKaineng]" },
        { fileName: "2645805.data", name: "(X3.7) Deepest Secrets: Yong Reactor [MapCanthaKainengCH5Reactor]" },
        { fileName: "2640407.data", name: "(Lobby) Arborstone <The Echovald Wilds> [MapCanthaArborstone]" },
        { fileName: "2641850.data", name: "(Z.3) The Echovald Wilds [MapCanthaEchovald]" },
        { fileName: "2642769.data", name: "(SM.2) Xunlai Jade Junkyard <The Echovald Wilds> [MapCanthaEchovaldStrikeMissions]" },
        { fileName: "2646104.data", name: "(SM.3) Kaineng Overlook <New Kaineng City> [MapCanthaKainengMinSecStrike]" },
        { fileName: "2644196.data", name: "(Z.4) Dragon's End [MapCanthaJadeSea]" },
        { fileName: "2702043.data", name: "(SM.4) Harvest Temple <Dragon's End> [MapCanthaJadeSeaStrikeMission]" },
        { fileName: "3012212.data", name: "(Z.5) Gyala Delve [MapCanthaDeep]" },
        { fileName: "3043972.data", name: "(Z.5) Gyala Delve [MapCanthaDeepQR2]" },
        { fileName: "3100947.data", name: "(X3.18) Forward <Seitung Province> [MapCanthaShingJeaExpac4AureneInstance]" }
      ]
    },
    {
      name: "(X4) Guild Wars 2: Secrets of the Obscure - (Z) Zone, (SM) Strike Mission - Skies of Tyria [Sky]",
      maps: [
        { fileName: "3134712.data", name: "(X4.1) Commander without a Cause: Gendarran Fields <Gendarran Fields> [MapValleySettlementExpac4StealthMission]" },
        { fileName: "3134778.data", name: "(Z.1) Skywatch Archipelago [MapSkyRise]" },
        { fileName: "3135285.data", name: "(SM.1) Cosmic Observatory <Skywatch Archipelago> [MapSkyRiseStrikeObservatory]" },
        { fileName: "3135660.data", name: "(Lobby) The Wizard's Tower [MapSkyTower]" },
        { fileName: "3135805.data", name: "(Z.2) Amnytas [MapSkySpire]" },
        { fileName: "3136072.data", name: "(SM.2) Temple of Febe [MapCerusArena]" }
      ]
    },
    {
      name: "(GH) Guild Halls",
      maps: [
        { fileName: "1255378.data", name: "(GH.1-2) Gilded Hollow [MapGuildCavern]" },
        { fileName: "1256064.data", name: "(GH.1-2) Lost Precipice [MapGuildHeights]" },
        { fileName: "1843274.data", name: "(GH.3) Windswept Haven [MapGuildPyramid]" },
        { fileName: "2648082.data", name: "(GH.4) Isle of Reflection [MapGuildIsle]" }
      ]
    },
    {
      name: "Cooperative - (FotM) Fractals of the Mists",
      maps: [
        { fileName: "1733961.data", name: "(Lounge) Mistlock Sanctuary [MapInfiniteCosmicVIPLounge]" },
        { fileName: "1498016.data", name: "(FotM.0) Mistlock Observatory <Fractals of the Mists> [MapInfiniteHub]" },
        { fileName: "519839.data", name: "(FotM.0-9) Fractals of the Mists [MapInfiniteIslands]" },
        { fileName: "2187042.data", name: "(FotM.0-9) Aquatic Ruins <Fractals of the Mists> [MapInfiniteUnderwater]" },
        { fileName: "1426653.data", name: "(FotM.0-9) Cliffside <Fractals of the Mists> [MapInfiniteCliffside]" },
        { fileName: "1472382.data", name: "(FotM.0-9) Snowblind <Fractals of the Mists> [MapInfiniteSnowblind]" },
        { fileName: "1472406.data", name: "(FotM.0-9) Swampland <Fractals of the Mists> [MapInfiniteSwamp]" },
        { fileName: "1498798.data", name: "(FotM.10-14) Aetherblade, Captain Mai Trin Boss <Aetherblade Retreat> [MapValleyArchDungeonUpdated02]" },
        { fileName: "1905739.data", name: "(FotM.10-14) Molten Furnace, Molten Boss <Molten Furnace> [MapFlameFrostFractalExtended]" },
        { fileName: "697450.data", name: "(FotM.10-14) Thaumanova Reactor [MapInfiniteReactor]" },
        { fileName: "1472361.data", name: "(FotM.15) Chaos Isles [MapInfiniteChaos]" },
        { fileName: "1605344.data", name: "(FotM.16) Nightmare [MapInfiniteToxic]" },
        { fileName: "1733857.data", name: "(FotM.17) Shattered Observatory [MapInfiniteCosmic]" },
        { fileName: "1905889.data", name: "(FotM.18) Twilight Oasis [MapInfiniteMordant]" },
        { fileName: "2005713.data", name: "(FotM.19) Deepstone [MapInfiniteLabyrinth]" },
        { fileName: "2094098.data", name: "(FotM.20) Siren's Reef [MapInfiniteCove]" },
        { fileName: "2333932.data", name: "(FotM.21) Sunqua Peak [MapFractalElementalIslands]" },
        { fileName: "3100195.data", name: "(FotM.22) Silent Surf [MapLuxonFractal]" }
      ]
    },
    {
      name: "Cooperative - (R) Raids",
      maps: [
        { fileName: "1427048.data", name: "(Lobby, R.0) Lion's Arch Aerodrome, Special Forces Training Area [MapValleyArchRaidLobby]" },
        { fileName: "1151420.data", name: "(R.1) Spirit Vale [MapRaidJungle01]" },
        { fileName: "1383309.data", name: "(R.2) Salvation Pass [MapE1R2]" },
        { fileName: "1454070.data", name: "(R.3) Stronghold of the Faithful [MapE1R3]" },
        { fileName: "1645215.data", name: "(R.4) Bastion of the Penitent [MapE1R4]" },
        { fileName: "1906329.data", name: "(R.5) Hall of Chains [MapE1R5]" },
        { fileName: "2045250.data", name: "(R.6) Mythwright Gambit [MapE2R2]" },
        { fileName: "2157962.data", name: "(R.7) The Key of Ahdashim [MapE2R3]" }
      ]
    },
    {
      name: "Competitive - Player vs. Player - (CQ) Conquest, (MB) Murderball, (SH) Stronghold, (TDM) Team Deathmatch",
      maps: [
        { fileName: "132570.data", name: "(Lobby) Heart of the Mists" },
        { fileName: "197249.data", name: "(Lobby) Heart of the Mists [MapPvPLobby]" },
        { fileName: "1713939.data", name: "(Lobby) Heart of the Mists [Mappvplobbyrework_cats]" },
        { fileName: "1734729.data", name: "(Lobby) Heart of the Mists [Mappvplobbyrework_catsMoreRoom]" },
        { fileName: "2129692.data", name: "(Lobby) Heart of the Mists [MapPvPLobby1016rework]" },
        { fileName: "132710.data", name: "(CQ.1-4) Battle of Khylo" },
        { fileName: "197402.data", name: "(CQ.1-4) Battle of Kyhlo [MapPvPConquestSiege]" },
        { fileName: "1644708.data", name: "(CQ.1-4) Battle of Khylo [MapPvPConquestSiege2]" },
        { fileName: "1666233.data", name: "(CQ.1-4) Battle of Khylo [MapPvPConquestSiege3]" },
        { fileName: "132837.data", name: "(CQ.1-4) Forest of Niflhel" },
        { fileName: "197545.data", name: "(CQ.1-4) Forest of Niflhel [MapPvPConquestForest]" },
        { fileName: "376916.data", name: "(CQ.1-4) Legacy of the Foefire [MapPvPConquestGuild]" },
        { fileName: "467374.data", name: "(CQ.1-4) Raid on the Capricorn" },
        { fileName: "520609.data", name: "(CQ.5) Temple of the Silent Storm [MapPvPConquestDojo]" },
        { fileName: "556199.data", name: "(CQ.6) Spirit Watch" },
        { fileName: "1473061.data", name: "(CQ.6) Spirit Watch [MapPVPConquestSpirit2]" },
        { fileName: "579383.data", name: "(CQ.7) Skyhammer" },
        { fileName: "677968.data", name: "(CQ.7) Skyhammer" },
        { fileName: "1426736.data", name: "(CQ.7) Skyhammer [MapPvPConquestCannonCapture]" },
        { fileName: "1934470.data", name: "(CQ.7) Skyhammer [MapPvPConquestCannonCapture2]" },
        { fileName: "1472979.data", name: "(CQ.8) Revenge of the Capricorn [MapPvPConquestCoastReturn]" },
        { fileName: "1644624.data", name: "(CQ.8) Revenge of the Capricorn [MapPvPConquestCoastReturnshrunk]" },
        { fileName: "1498174.data", name: "(CQ.9) Eternal Coliseum [MapPVPConquestArenaGods2]" },
        { fileName: "1704155.data", name: "(CQ.9) Eternal Coliseum [MapPVPConquestArenaGods4]" },
        { fileName: "2128880.data", name: "(CQ.9) Eternal Coliseum [MapPVPConquestArenaGodsTheme]" },
        { fileName: "2065760.data", name: "(CQ.10) Djinn's Dominion [Mapdesertconq]" },
        { fileName: "2128938.data", name: "(CQ.10) Djinn's Dominion [MapDesertConqWallMid]" },
        { fileName: "2175965.data", name: "(CQ.10) Djinn's Dominion [MapDesertConqWallMid2]" },
        { fileName: "791564.data", name: "(MB.1, TDM.2) Courtyard [MapDMCourtyard]" },
        { fileName: "1713054.data", name: "(MB.1, TDM.2) Courtyard [MapDMCourtyard2]" },
        { fileName: "870987.data", name: "(SH) Battle of Champion's Dusk [MapPvPStrongholdCity]" },
        { fileName: "871093.data", name: "(SH) Battle of Champion's Dusk [MapPvPStrongholdCityMercs]" },
        { fileName: "1712986.data", name: "(TDM.1) Hall of the Mists [MapHallway2v2]" },
        { fileName: "1712945.data", name: "(TDM.3) Asura Arena [Mapasura2v2]" },
        { fileName: "2187125.data", name: "(TDM.4) Auric Span [MapJungle2v2]" }
      ]
    },
    {
      name: "Competitive - World vs. World - (MW) Mist War, (EotM) Edge of the Mists",
      maps: [      
        { fileName: "2113077.data", name: "(Lounge) Armistice Bastion [MapWvwLounge]" },
        { fileName: "131235.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum" },
        { fileName: "195806.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenter]" },
        { fileName: "1798709.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenterGliding]" },
        { fileName: "1885693.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenter4]" },
        { fileName: "2263889.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenterWallChange10_19]" },
        { fileName: "131574.data", name: "(MW) Alpine Borderlands" },
        { fileName: "641501.data", name: "(MW) Alpine Borderlands [MapWvWRedHomeLake01]" },
        { fileName: "1799855.data", name: "(MW) Alpine Borderlands [MapWvWRedHomeLake01gliding]" },
        { fileName: "1918037.data", name: "(MW) Alpine Borderlands [MapWvWRedHomeLake02]" },
        { fileName: "1427803.data", name: "(MW) Desert Borderlands [MapWvWDesertHomeUpdate]" },
        { fileName: "1647236.data", name: "(MW) Desert Borderlands [MapWvWDesertHomeUpdateMIDrework]" },
        { fileName: "1799442.data", name: "(MW) Desert Borderlands [MapWvWDesertHome4]" },
        { fileName: "2112733.data", name: "(MW) Desert Borderlands [MapWvWDesertHome]" },
        { fileName: "736241.data", name: "(EotM) Edge of the Mists [MapWvWIslands]" }
      ]
    },
    {
      name: "Festival - (LNY) Lunar New Year",
      maps: [
        { fileName: "1625212.data", name: "(City) Divinity's Reach <Divinity's Reach> [MapValleyDivinityLNY]" },
        { fileName: "595582.data", name: "(LNY) Dragon Ball Arena [MapDragonBall]" }
      ]
    },
    {
      name: "Festival - (SAB) Super Adventure Festival - Super Adventure Box [SAB]",
      maps: [
        { fileName: "1666365.data", name: "(City) Rata Sum <Rata Sum> [MapWetlandComplexSAB]" },
        { fileName: "569756.data", name: "(SAB) Super Adventure Box" },
        { fileName: "636133.data", name: "(Lobby) Hub [MapSABHub]" },
        { fileName: "635555.data", name: "(SAB.1) World 1 [MapSABWorld1]" },
        { fileName: "635960.data", name: "(SAB.2) World 2 [MapSABWorld2]" },
        { fileName: "3024941.data", name: "(SAB.3) World 3 [MapSABWorld3-0]" }
      ]
    },
    {
      name: "Festival - (DB) Dragon Bash",
      maps: [
        { fileName: "2164993.data", name: "(City) Hoelbrak <Hoelbrak> [MapAlpineHallDragonBash]" }
      ]
    },
    {
      name: "Festival - (FotFW) Festival of the Four Winds",
      maps: [
        { fileName: "606255.data", name: "(FotFW) Labyrinthine Cliffs [MapEvenKiteCity]" },
        { fileName: "605983.data", name: "(FotFW) Sanctum Sprint [MapEvenTriathlonKiteCity]" },
        { fileName: "617120.data", name: "(FotFW) Aspect Arena [MapEvenPVPKiteCity]" },
        { fileName: "622681.data", name: "(FotFW) The Crown Pavilion <Divinity's Reach> [MapJubileeArena]" }
      ]
    },
    {
      name: "Festival - (HW) Halloween - Mad King's Realm [MadKing]",
      maps: [
        { fileName: "1869665.data", name: "(City) Lion's Arch <Lion's Arch> [MapValleyArchKielHalloween]" },
        { fileName: "506670.data", name: "(HW) Mad King's Labyrinth, Lunatic Inquisition [MapMadKingMaze]" },
        { fileName: "662436.data", name: "(HW) Mad King's Labyrinth, Lunatic Inquisition [MapMadKingMaze2013]" },
        { fileName: "2499169.data", name: "(HW) Mad King's Labyrinth, Lunatic Inquisition [MapMadKingMaze2021]" },
        { fileName: "506739.data", name: "(HW) Mad King's Clock Tower [MapMadKingTower]" },
        { fileName: "506539.data", name: "(HW) Mad King's Raceway, Reaper's Rumble [MapMadKingField]" },
        { fileName: "506592.data", name: "(HW) Ascent to Madness [MapMadKingBoss]" }
      ]
    },
    {
      name: "Festival - (WD) Wintersday - (SM) Strike Mission - Wintersday Celebration [Wintersday]",
      maps: [
        { fileName: "705746.data", name: "(City) Divinity's Reach <Divinity's Reach> [MapWintersDayValleyDivinity2013]" },
        { fileName: "1917775.data", name: "(City) Divinity's Reach <Divinity's Reach> [MapValleyDivinityholiday]" },
        { fileName: "529718.data", name: "(WD) Bell Choir Ensemble, Snowball Mayhem [MapWintersdaySnowGlobe]" },
        { fileName: "529896.data", name: "(WD) Tixx's Infinirarium, Toypocalypse [MapWintersdayAirship]" },
        { fileName: "529945.data", name: "(WD) Winter Wonderland [MapWintersdayFrostyland]" },
        { fileName: "2076921.data", name: "(SM) Secret Lair of the Snowmen [MapFrozenTyrant]" }
      ]
    },
    {
      name: "Miscellaneous",
      maps: [
        { fileName: "122695.data", name: "(((Empty Plane)))" },
        { fileName: "129834.data", name: "Lake Doric" },
        { fileName: "132853.data", name: "(((Empty Box)))" },
        { fileName: "184799.data", name: "[MapDummy]" },
        { fileName: "193081.data", name: "Lake Doric [MapValleyReach]" },
        { fileName: "197562.data", name: "[MapPvPBlackBox]" },
        { fileName: "606030.data", name: "Basket Brawl [MapBasketBrawl]" },
        { fileName: "875614.data", name: "[MapTutorialChina]" },
        { fileName: "969964.data", name: "Verdant Brink <Verdant Brink> [MapRootsAfterShip]" },
        { fileName: "1255516.data", name: "[MapGuildColiseum]" },
        { fileName: "1255634.data", name: "(((Unknown Town)))" },
        { fileName: "1282201.data", name: "(((WvW)))" },
        { fileName: "1498193.data", name: "[MapPvPConquestTemp]" },
        { fileName: "1513556.data", name: "[MapPvPInfection2]" },
        { fileName: "1513607.data", name: "[MapPvPConquestTest_01]" },
        { fileName: "1513620.data", name: "[MapPvPConquestTest_02]" },
        { fileName: "1513675.data", name: "[MapPvPConquestTest_04]" },
        { fileName: "1956299.data", name: "[MapDesertArchipelago_Instance]" },
        { fileName: "2204239.data", name: "<Grothmar Valley> [MapRegrownBloodCinematic]" },
        { fileName: "2224545.data", name: "Jaga Moraine [MapAlpinemoraine]" },
        { fileName: "2224624.data", name: "[MapAlpineMoraineFinalInstance]" },
        { fileName: "2257438.data", name: "[MapTest]" },
        { fileName: "2649061.data", name: "<Grothmar Valley> [MapRegrownBlood_CinematicEOD]" },
        { fileName: "2644298.data", name: "[MapJadeSeaWhirlpool]" },
        { fileName: "2689589.data", name: "<Desert Highlands> [MapDesertHighlandsE3]" }
      ]
    }
  ],
} as const;

export default mapMap;
