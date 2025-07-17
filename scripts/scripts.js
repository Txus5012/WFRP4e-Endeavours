// This function is run on the player's end, by the owner(s) of the token(s) selected by the GM when the WFRP4e Endeavours macro was run.

export function endeavour(actor, travel) {
    let content = "";
    let selectedEndeavour;
    let endeavours;
    let endeavourlabel;
	let title;
	let change;
    
    if ( !travel ) {
		endeavourlabel = {
			"Animal Training": game.i18n.localize("WFRP4eEndeavours.BA.Animal"),
			"Banking": game.i18n.localize("WFRP4eEndeavours.BA.Banking"),
			"Changing Career": game.i18n.localize("WFRP4eEndeavours.BA.Career"),
			"Commission": game.i18n.localize("WFRP4eEndeavours.BA.Commission"),
			"Consult an Expert": game.i18n.localize("WFRP4eEndeavours.BA.Expert"),
			"Crafting": game.i18n.localize("WFRP4eEndeavours.BA.Crafting"),
			"Income": game.i18n.localize("WFRP4eEndeavours.BA.Income"),
			"Invent!": game.i18n.localize("WFRP4eEndeavours.BA.Invent"),
			"Training": game.i18n.localize("WFRP4eEndeavours.BA.Training"),
			"Unusual Learning": game.i18n.localize("WFRP4eEndeavours.BA.Learning"),
			"Combat Training (Rangers, Warriors)": game.i18n.localize("WFRP4eEndeavours.BA.Combat"),
			"Fomment Dissent (Burghers, Peasants)": game.i18n.localize("WFRP4eEndeavours.BA.Dissent"),
			"The Latest News (Rangers, Riverfolk)": game.i18n.localize("WFRP4eEndeavours.BA.News"),
			"Reputation (Academics, Burghers, Courtiers)": game.i18n.localize("WFRP4eEndeavours.BA.Reputation"),
			"Research Lore (Academics)": game.i18n.localize("WFRP4eEndeavours.BA.Research"),
			"Study a Mark (Rogues)": game.i18n.localize("WFRP4eEndeavours.BA.Mark")
		}
		if (game.settings.get('wfrp4e-endeavours', 'altdorf')) {
			endeavourlabel["College Research"] = game.i18n.localize("WFRP4eEndeavours.BA.College"),
			endeavourlabel["Patronage"] = game.i18n.localize("WFRP4eEndeavours.BA.Patronage"),
			endeavourlabel["Penance"] = game.i18n.localize("WFRP4eEndeavours.BA.Penance"),
			endeavourlabel["Train with Unusual Weapon"] = game.i18n.localize("WFRP4eEndeavours.BA.UnusualWeapon"),
			endeavourlabel["Test Magic Item"] = game.i18n.localize("WFRP4eEndeavours.BA.MagicItem")
				}
		if (game.settings.get('wfrp4e-endeavours', 'uia')) {
			endeavourlabel["Alcatini Method"] = game.i18n.localize("WFRP4eEndeavours.BA.Alcatini"),
			endeavourlabel["Count Punchausen's Narrative Auction"] = game.i18n.localize("WFRP4eEndeavours.BA.Punchausen"),
			endeavourlabel["Fanmaris's Perfect Shot"] = game.i18n.localize("WFRP4eEndeavours.BA.Fanmaris"),
			endeavourlabel["The Leitdorf Defence"] = game.i18n.localize("WFRP4eEndeavours.BA.Leitdorf"),
			endeavourlabel["The Quartermaster Shuffle"] = game.i18n.localize("WFRP4eEndeavours.BA.Quartermaster")
				}
		if (game.settings.get('wfrp4e-endeavours', 'wom')) {
			endeavourlabel["Brew Potion"] = game.i18n.localize("WFRP4eEndeavours.BA.Potion"),
			endeavourlabel["Gather Ingredients"] = game.i18n.localize("WFRP4eEndeavours.BA.Ingredients"),
			endeavourlabel["Improve Familiar"] = game.i18n.localize("WFRP4eEndeavours.BA.Familiar"),
			endeavourlabel["Perform Ritual"] = game.i18n.localize("WFRP4eEndeavours.BA.Ritual")
				}
		if (game.settings.get('wfrp4e-endeavours', 'lustria')) {
			endeavourlabel["Deforestation"] = game.i18n.localize("WFRP4eEndeavours.BA.Deforestation"),
			endeavourlabel["Attuning With the Ancients"] = game.i18n.localize("WFRP4eEndeavours.BA.Ancients"),
			endeavourlabel["Boatbuilding"] = game.i18n.localize("WFRP4eEndeavours.BA.Boatbuilding"),
			endeavourlabel["Construction"] = game.i18n.localize("WFRP4eEndeavours.BA.Construction"),
			endeavourlabel["Entertaining"] = game.i18n.localize("WFRP4eEndeavours.BA.Entertaining"),
			endeavourlabel["Patrolling the Border"] = game.i18n.localize("WFRP4eEndeavours.BA.Border"),
			endeavourlabel["Rationing"] = game.i18n.localize("WFRP4eEndeavours.BA.Rationing"),
			endeavourlabel["Sponsoring an Expedition"] = game.i18n.localize("WFRP4eEndeavours.BA.Expedition")
				}
		if (game.settings.get('wfrp4e-endeavours', 'dwarf')) {
			endeavourlabel["Advance Underground"] = game.i18n.localize("WFRP4eEndeavours.BA.Underground"),
			endeavourlabel["Brew Batch"] = game.i18n.localize("WFRP4eEndeavours.BA.Brew"),
			endeavourlabel["Concoct Drakefire"] = game.i18n.localize("WFRP4eEndeavours.BA.Drakefire"),
			endeavourlabel["Consult the Archives"] = game.i18n.localize("WFRP4eEndeavours.BA.Archives"),
			endeavourlabel["Customise a Trapping"] = game.i18n.localize("WFRP4eEndeavours.BA.Trapping"),
			endeavourlabel["Forge Rune"] = game.i18n.localize("WFRP4eEndeavours.BA.ForgeRune"),
			endeavourlabel["Swear Oath"] = game.i18n.localize("WFRP4eEndeavours.BA.Oath"),
			endeavourlabel["Take the Slayer Oath"] = game.i18n.localize("WFRP4eEndeavours.BA.Slayer")
				}
		if (game.settings.get('wfrp4e-endeavours', 'helf')) {
			endeavourlabel["Intrigue"] = game.i18n.localize("WFRP4eEndeavours.BA.Intrigue"),
			endeavourlabel["Cast Aspersions"] = game.i18n.localize("WFRP4eEndeavours.BA.Aspersions"),
			endeavourlabel["Repair Reputation"] = game.i18n.localize("WFRP4eEndeavours.BA.RepairReputation")
				}
		if (game.settings.get('wfrp4e-endeavours', 'criminal')) {
			endeavourlabel["Black Market"] = game.i18n.localize("WFRP4eEndeavours.BA.BlackMarket"),
			endeavourlabel["Gambling Den"] = game.i18n.localize("WFRP4eEndeavours.BA.Gambling"),
			endeavourlabel["Plant Identities"] = game.i18n.localize("WFRP4eEndeavours.BA.Identities"),
			endeavourlabel["Whisper Campaign"] = game.i18n.localize("WFRP4eEndeavours.BA.Whisper")
				}
		if (game.settings.get('wfrp4e-endeavours', 'organizedcrime')) {
			endeavourlabel["Build Gang"] = game.i18n.localize("WFRP4eEndeavours.BA.Gang"),
			endeavourlabel["Organising Crime"] = game.i18n.localize("WFRP4eEndeavours.BA.Organising"),
			endeavourlabel["Maintain Influence"] = game.i18n.localize("WFRP4eEndeavours.BA.Influence")
				}
		if (game.settings.get('wfrp4e-endeavours', 'gaol')) {
			endeavourlabel = {
				"Changing Career": game.i18n.localize("WFRP4eEndeavours.BA.Career"),
				"Training": game.i18n.localize("WFRP4eEndeavours.BA.Training"),
				"Unusual Learning": game.i18n.localize("WFRP4eEndeavours.BA.Learning"),
				"Study a Mark (Rogues)": game.i18n.localize("WFRP4eEndeavours.BA.Mark"),
				"Gaol Break": game.i18n.localize("WFRP4eEndeavours.BA.Gaol")
					}
				}
		if (game.settings.get('wfrp4e-endeavours', 'shelley')) {
			endeavourlabel["A Study in Skaven"] = game.i18n.localize("WFRP4eEndeavours.BA.Skaven")
				}
		if (game.settings.get('wfrp4e-endeavours', 'farforian')) {
			endeavourlabel["Only the Best"] = game.i18n.localize("WFRP4eEndeavours.BA.Best")
				}
		if (game.settings.get('wfrp4e-endeavours', 'willhelm')) {
			endeavourlabel["The Null Hypotesis"] = game.i18n.localize("WFRP4eEndeavours.BA.Hypotesis")
				}
		if (game.settings.get('wfrp4e-endeavours', 'angela')) {
			endeavourlabel["Hedge School"] = game.i18n.localize("WFRP4eEndeavours.BA.Hedge")
				}
		if (game.settings.get('wfrp4e-endeavours', 'rosendorn')) {
			endeavourlabel["No Use for Visionaries"] = game.i18n.localize("WFRP4eEndeavours.BA.Visionaries")
				}
		if (game.settings.get('wfrp4e-endeavours', 'ulricsson')) {
			endeavourlabel["Bear Witness"] = game.i18n.localize("WFRP4eEndeavours.BA.Witness")
				}
		if (game.settings.get('wfrp4e-endeavours', 'soc')) {
			endeavourlabel = {
				"Crafting": game.i18n.localize("WFRP4eEndeavours.BA.Crafting"),
				"Invent!": game.i18n.localize("WFRP4eEndeavours.BA.Invent"),
				"Training": game.i18n.localize("WFRP4eEndeavours.BA.Training"),
				"Unusual Learning": game.i18n.localize("WFRP4eEndeavours.BA.Learning"),
				"Combat Training (Rangers, Warriors)": game.i18n.localize("WFRP4eEndeavours.BA.Combat"),
				"Fomment Dissent (Burghers, Peasants)": game.i18n.localize("WFRP4eEndeavours.BA.Dissent"),
				"Research Lore (Academics)": game.i18n.localize("WFRP4eEndeavours.BA.Research"),
				"Mapmaking": game.i18n.localize("WFRP4eEndeavours.BA.Mapmaking"),
				"Opportune Trade": game.i18n.localize("WFRP4eEndeavours.BA.Trade"),
				"Ship Maintenance": game.i18n.localize("WFRP4eEndeavours.BA.Ship"),
				"Train Crew": game.i18n.localize("WFRP4eEndeavours.BA.Crew")
				}
				if (game.settings.get('wfrp4e-endeavours', 'uia')) {
					endeavourlabel["Alcatini Method"] = game.i18n.localize("WFRP4eEndeavours.BA.Alcatini"),
					endeavourlabel["Fanmaris's Perfect Shot"] = game.i18n.localize("WFRP4eEndeavours.BA.Fanmaris"),
					endeavourlabel["The Leitdorf Defence"] = game.i18n.localize("WFRP4eEndeavours.BA.Leitdorf")
					}
				}
	} else {
		endeavourlabel = {
			"Woodcraft": game.i18n.localize("WFRP4eEndeavours.Travel.Woodcraft"),
			"Forage": game.i18n.localize("WFRP4eEndeavours.Travel.Forage"),
			"Gather Information": game.i18n.localize("WFRP4eEndeavours.Travel.Information"),
			"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Travel.Watch"),
			"Map the Route": game.i18n.localize("WFRP4eEndeavours.Travel.MapRoute"),
			"Practice a Skill": game.i18n.localize("WFRP4eEndeavours.Travel.Practice"),
			"Recuperate": game.i18n.localize("WFRP4eEndeavours.Travel.Recuperate"),
			"Make Camp": game.i18n.localize("WFRP4eEndeavours.Travel.Camp")
		}
		if (game.settings.get('wfrp4e-endeavours', 'lustria')) {
			endeavourlabel = {
				"Find Shelter": game.i18n.localize("WFRP4eEndeavours.Travel.Shelter"),
				"Forage for Food": game.i18n.localize("WFRP4eEndeavours.Travel.ForageforFood"),
				"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Travel.Watch"),
				"Map the Route": game.i18n.localize("WFRP4eEndeavours.Travel.MapRoute"),
				"Make Camp": game.i18n.localize("WFRP4eEndeavours.Travel.Camp"),
				"Practice a Skill": game.i18n.localize("WFRP4eEndeavours.Travel.Practice"),
				"Repair a Boat": game.i18n.localize("WFRP4eEndeavours.Travel.Boat")
				}
			}
		if (game.settings.get('wfrp4e-endeavours', 'wilderness')) {
			endeavourlabel = {
				"Planning": game.i18n.localize("WFRP4eEndeavours.Travel.Planning"),
				"Forage": game.i18n.localize("WFRP4eEndeavours.Travel.ForageWilderness"),
				"Haste": game.i18n.localize("WFRP4eEndeavours.Travel.Haste"),
				"Hunt": game.i18n.localize("WFRP4eEndeavours.Travel.Hunt"),
				"Navigate": game.i18n.localize("WFRP4eEndeavours.Travel.Navigate"),
				"Navigate Double": game.i18n.localize("WFRP4eEndeavours.Travel.NavigateDouble"),
				"Map": game.i18n.localize("WFRP4eEndeavours.Travel.Map"),
				"Map Double": game.i18n.localize("WFRP4eEndeavours.Travel.MapDouble"),
				"Scout": game.i18n.localize("WFRP4eEndeavours.Travel.Scout"),
				"Track": game.i18n.localize("WFRP4eEndeavours.Travel.Track"),
				"Water": game.i18n.localize("WFRP4eEndeavours.Travel.Water"),
				"Cook": game.i18n.localize("WFRP4eEndeavours.Travel.Cook"),
				"Journal": game.i18n.localize("WFRP4eEndeavours.Travel.Journal"),
				"Make Camp": game.i18n.localize("WFRP4eEndeavours.Travel.MakeCamp"),
				"Recuperate": game.i18n.localize("WFRP4eEndeavours.Travel.RecuperateWilderness"),
				"Trap": game.i18n.localize("WFRP4eEndeavours.Travel.Trap"),
				"Watch": game.i18n.localize("WFRP4eEndeavours.Travel.WatchWilderness"),
				"Watch Extra": game.i18n.localize("WFRP4eEndeavours.Travel.WatchExtra")
				}
			}
		if (game.settings.get('wfrp4e-endeavours', 'dwarf')) {
			endeavourlabel = {
				"Find Water": game.i18n.localize("WFRP4eEndeavours.Travel.WaterDelving"),
				"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Travel.Watch"),
				"Make Camp": game.i18n.localize("WFRP4eEndeavours.Travel.Camp"),
				"Map the Route": game.i18n.localize("WFRP4eEndeavours.Travel.MapRoute"),
				"Recuperate": game.i18n.localize("WFRP4eEndeavours.Travel.Recuperate")
				}
			}
      }

    if ( !travel ) {
		endeavours = {
			"Animal Training": game.i18n.localize("WFRP4eEndeavours.Link.Animal"),
			"Banking": game.i18n.localize("WFRP4eEndeavours.Link.Banking"),
			"Changing Career": game.i18n.localize("WFRP4eEndeavours.Link.Career"),
			"Commission": game.i18n.localize("WFRP4eEndeavours.Link.Commission"),
			"Consult an Expert": game.i18n.localize("WFRP4eEndeavours.Link.Expert"),
			"Crafting": game.i18n.localize("WFRP4eEndeavours.Link.Crafting"),
			"Income": game.i18n.localize("WFRP4eEndeavours.Link.Income"),
			"Invent!": game.i18n.localize("WFRP4eEndeavours.Link.Invent"),
			"Training": game.i18n.localize("WFRP4eEndeavours.Link.Training"),
			"Unusual Learning": game.i18n.localize("WFRP4eEndeavours.Link.Learning"),
			"Combat Training": game.i18n.localize("WFRP4eEndeavours.Link.Combat"),
			"Fomment Dissent": game.i18n.localize("WFRP4eEndeavours.Link.Dissent"),
			"The Latest News": game.i18n.localize("WFRP4eEndeavours.Link.News"),
			"Reputation": game.i18n.localize("WFRP4eEndeavours.Link.Reputation"),
			"Research Lore": game.i18n.localize("WFRP4eEndeavours.Link.Research"),
			"Study a Mark": game.i18n.localize("WFRP4eEndeavours.Link.Mark")
			}
		if (game.settings.get('wfrp4e-endeavours', 'altdorf')) {
			endeavours["College Research"] = game.i18n.localize("WFRP4eEndeavours.Link.College"),
			endeavours["Patronage"] = game.i18n.localize("WFRP4eEndeavours.Link.Patronage"),
			endeavours["Penance"] = game.i18n.localize("WFRP4eEndeavours.Link.Penance"),
			endeavours["Train with Unusual Weapon"] = game.i18n.localize("WFRP4eEndeavours.Link.UnusualWeapon"),
			endeavours["Test Magic Item"] = game.i18n.localize("WFRP4eEndeavours.Link.MagicItem")
				}
		if (game.settings.get('wfrp4e-endeavours', 'uia')) {
			endeavours["Alcatini Method"] = game.i18n.localize("WFRP4eEndeavours.Link.Alcatini"),
			endeavours["Count Punchausen's Narrative Auction"] = game.i18n.localize("WFRP4eEndeavours.Link.Punchausen"),
			endeavours["Fanmaris's Perfect Shot"] = game.i18n.localize("WFRP4eEndeavours.Link.Fanmaris"),
			endeavours["The Leitdorf Defence"] = game.i18n.localize("WFRP4eEndeavours.Link.Leitdorf"),
			endeavours["The Quartermaster Shuffle"] = game.i18n.localize("WFRP4eEndeavours.Link.Quartermaster")
				}
		if (game.settings.get('wfrp4e-endeavours', 'wom')) {
			endeavours["Brew Potion"] = game.i18n.localize("WFRP4eEndeavours.Link.Potion"),
			endeavours["Gather Ingredients"] = game.i18n.localize("WFRP4eEndeavours.Link.Ingredients"),
			endeavours["Improve Familiar"] = game.i18n.localize("WFRP4eEndeavours.Link.Familiar"),
			endeavours["Perform Ritual"] = game.i18n.localize("WFRP4eEndeavours.Link.Ritual")
				}
		if (game.settings.get('wfrp4e-endeavours', 'lustria')) {
			endeavours["Deforestation"] = game.i18n.localize("WFRP4eEndeavours.Link.Deforestation"),
			endeavours["Attuning With the Ancients"] = game.i18n.localize("WFRP4eEndeavours.Link.Ancients"),
			endeavours["Boatbuilding"] = game.i18n.localize("WFRP4eEndeavours.Link.Boatbuilding"),
			endeavours["Construction"] = game.i18n.localize("WFRP4eEndeavours.Link.Construction"),
			endeavours["Entertaining"] = game.i18n.localize("WFRP4eEndeavours.Link.Entertaining"),
			endeavours["Patrolling the Border"] = game.i18n.localize("WFRP4eEndeavours.Link.Border"),
			endeavours["Rationing"] = game.i18n.localize("WFRP4eEndeavours.Link.Rationing"),
			endeavours["Sponsoring an Expedition"] = game.i18n.localize("WFRP4eEndeavours.Link.Expedition")
				}
		if (game.settings.get('wfrp4e-endeavours', 'dwarf')) {
			endeavours["Advance Underground"] = game.i18n.localize("WFRP4eEndeavours.Link.Underground"),
			endeavours["Brew Batch"] = game.i18n.localize("WFRP4eEndeavours.Link.Brew"),
			endeavours["Concoct Drakefire"] = game.i18n.localize("WFRP4eEndeavours.Link.Drakefire"),
			endeavours["Consult the Archives"] = game.i18n.localize("WFRP4eEndeavours.Link.Archives"),
			endeavours["Customise a Trapping"] = game.i18n.localize("WFRP4eEndeavours.Link.Trapping"),
			endeavours["Forge Rune"] = game.i18n.localize("WFRP4eEndeavours.Link.ForgeRune"),
			endeavours["Swear Oath"] = game.i18n.localize("WFRP4eEndeavours.Link.Oath"),
			endeavours["Take the Slayer Oath"] = game.i18n.localize("WFRP4eEndeavours.Link.Slayer")
				}
		if (game.settings.get('wfrp4e-endeavours', 'dwarf')) {
			endeavours["Intrigue"] = game.i18n.localize("WFRP4eEndeavours.Link.Intrigue"),
			endeavours["Cast Aspersions"] = game.i18n.localize("WFRP4eEndeavours.Link.Aspersions"),
			endeavours["Repair Reputation"] = game.i18n.localize("WFRP4eEndeavours.Link.RepairReputation")
				}
		if (game.settings.get('wfrp4e-endeavours', 'criminal')) {
			endeavours["Black Market"] = game.i18n.localize("WFRP4eEndeavours.Link.BlackMarket"),
			endeavours["Gambling Den"] = game.i18n.localize("WFRP4eEndeavours.Link.Gambling"),
			endeavours["Plant Identities"] = game.i18n.localize("WFRP4eEndeavours.Link.Identities"),
			endeavours["Whisper Campaign"] = game.i18n.localize("WFRP4eEndeavours.Link.Whisper")
				}
		if (game.settings.get('wfrp4e-endeavours', 'organizedcrime')) {
			endeavours["Build Gang"] = game.i18n.localize("WFRP4eEndeavours.Link.Gang"),
			endeavours["Organising Crime"] = game.i18n.localize("WFRP4eEndeavours.Link.Organising"),
			endeavours["Maintain Influence"] = game.i18n.localize("WFRP4eEndeavours.Link.Influence")
				}
		if (game.settings.get('wfrp4e-endeavours', 'shelley')) {
			endeavours["A Study in Skaven"] = game.i18n.localize("WFRP4eEndeavours.Link.Skaven")
				}
		if (game.settings.get('wfrp4e-endeavours', 'farforian')) {
			endeavours["Only the Best"] = game.i18n.localize("WFRP4eEndeavours.Link.Best")
				}
		if (game.settings.get('wfrp4e-endeavours', 'willhelm')) {
			endeavours["The Null Hypotesis"] = game.i18n.localize("WFRP4eEndeavours.Link.Hypotesis")
				}
		if (game.settings.get('wfrp4e-endeavours', 'angela')) {
			endeavours["Hedge School"] = game.i18n.localize("WFRP4eEndeavours.Link.Hedge")
				}
		if (game.settings.get('wfrp4e-endeavours', 'rosendorn')) {
			endeavours["No Use for Visionaries"] = game.i18n.localize("WFRP4eEndeavours.Link.Visionaries")
				}
		if (game.settings.get('wfrp4e-endeavours', 'ulricsson')) {
			endeavours["Bear Witness"] = game.i18n.localize("WFRP4eEndeavours.Link.Witness")
				}
		if (game.settings.get('wfrp4e-endeavours', 'soc')) {
			endeavours = {
				"Crafting": game.i18n.localize("WFRP4eEndeavours.Link.Crafting"),
				"Invent!": game.i18n.localize("WFRP4eEndeavours.Link.Invent"),
				"Training": game.i18n.localize("WFRP4eEndeavours.Link.Training"),
				"Unusual Learning": game.i18n.localize("WFRP4eEndeavours.Link.Learning"),
				"Combat Training (Rangers, Warriors)": game.i18n.localize("WFRP4eEndeavours.Link.Combat"),
				"Fomment Dissent (Burghers, Peasants)": game.i18n.localize("WFRP4eEndeavours.Link.Dissent"),
				"Research Lore (Academics)": game.i18n.localize("WFRP4eEndeavours.Link.Research"),
				"Mapmaking": game.i18n.localize("WFRP4eEndeavours.Link.Mapmaking"),
				"Opportune Trade": game.i18n.localize("WFRP4eEndeavours.Link.Trade"),
				"Ship Maintenance": game.i18n.localize("WFRP4eEndeavours.Link.Ship"),
				"Train Crew": game.i18n.localize("WFRP4eEndeavours.Link.Crew")
				}
				if (game.settings.get('wfrp4e-endeavours', 'uia')) {
					endeavours["Alcatini Method"] = game.i18n.localize("WFRP4eEndeavours.Link.Alcatini"),
					endeavours["Fanmaris's Perfect Shot"] = game.i18n.localize("WFRP4eEndeavours.Link.Fanmaris"),
					endeavours["The Leitdorf Defence"] = game.i18n.localize("WFRP4eEndeavours.Link.Leitdorf")
					}
			}
		if (game.settings.get('wfrp4e-endeavours', 'gaol')) {
			endeavours = {
				"Changing Career": game.i18n.localize("WFRP4eEndeavours.Link.Career"),
				"Training": game.i18n.localize("WFRP4eEndeavours.Link.Training"),
				"Unusual Learning": game.i18n.localize("WFRP4eEndeavours.Link.Learning"),
				"Study a Mark": game.i18n.localize("WFRP4eEndeavours.Link.Mark"),
				"Gaol Break": game.i18n.localize("WFRP4eEndeavours.Link.Gaol")
				}
			}
   } else {
		endeavours = {
			"Woodcraft": game.i18n.localize("WFRP4eEndeavours.Link.Woodcraft"),
			"Forage": game.i18n.localize("WFRP4eEndeavours.Link.Forage"),
			"Gather Information": game.i18n.localize("WFRP4eEndeavours.Link.Information"),
			"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Link.Watch"),
			"Map the Route": game.i18n.localize("WFRP4eEndeavours.Link.MapRoute"),
			"Practice a Skill": game.i18n.localize("WFRP4eEndeavours.Link.Practice"),
			"Recuperate": game.i18n.localize("WFRP4eEndeavours.Link.Recuperate"),
			"Make Camp": game.i18n.localize("WFRP4eEndeavours.Link.Camp")
			}
		if (game.settings.get('wfrp4e-endeavours', 'lustria')) {
			endeavours = {
				"Find Shelter": game.i18n.localize("WFRP4eEndeavours.Link.Shelter"),
				"Forage for Food": game.i18n.localize("WFRP4eEndeavours.Link.ForageforFood"),
				"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Link.WatchLustria"),
				"Map the Route": game.i18n.localize("WFRP4eEndeavours.Link.MapLustria"),
				"Make Camp": game.i18n.localize("WFRP4eEndeavours.Link.CampLustria"),
				"Practice a Skill": game.i18n.localize("WFRP4eEndeavours.Link.PracticeLustria"),
				"Repair a Boat": game.i18n.localize("WFRP4eEndeavours.Link.Boat")
				}
			}
		if (game.settings.get('wfrp4e-endeavours', 'wilderness')) {
			endeavours = {
				"Planning": game.i18n.localize("WFRP4eEndeavours.Link.Planning"),
				"Forage": game.i18n.localize("WFRP4eEndeavours.Link.ForageWilderness"),
				"Haste": game.i18n.localize("WFRP4eEndeavours.Link.Haste"),
				"Hunt": game.i18n.localize("WFRP4eEndeavours.Link.Hunt"),
				"Navigate": game.i18n.localize("WFRP4eEndeavours.Link.Navigate"),
				"Navigate Double": game.i18n.localize("WFRP4eEndeavours.Link.NavigateDouble"),
				"Map": game.i18n.localize("WFRP4eEndeavours.Link.Map"),
				"Map Double": game.i18n.localize("WFRP4eEndeavours.Link.MapDouble"),
				"Scout": game.i18n.localize("WFRP4eEndeavours.Link.Scout"),
				"Track": game.i18n.localize("WFRP4eEndeavours.Link.Track"),
				"Water": game.i18n.localize("WFRP4eEndeavours.Link.Water"),
				"Cook": game.i18n.localize("WFRP4eEndeavours.Link.Cook"),
				"Journal": game.i18n.localize("WFRP4eEndeavours.Link.Journal"),
				"Make Camp": game.i18n.localize("WFRP4eEndeavours.Link.MakeCamp"),
				"Recuperate": game.i18n.localize("WFRP4eEndeavours.Link.RecuperateWilderness"),
				"Trap": game.i18n.localize("WFRP4eEndeavours.Link.Trap"),
				"Watch": game.i18n.localize("WFRP4eEndeavours.Link.WatchWilderness"),
				"Watch Extra": game.i18n.localize("WFRP4eEndeavours.Link.WatchExtra")
				}
			}
		if (game.settings.get('wfrp4e-endeavours', 'dwarf')) {
			endeavours = {
			"Find Water": game.i18n.localize("WFRP4eEndeavours.Link.WaterDelving"),
			"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Link.Watch"),
			"Make Camp": game.i18n.localize("WFRP4eEndeavours.Link.Camp"),
			"Map the Route": game.i18n.localize("WFRP4eEndeavours.Link.MapRoute"),
			"Recuperate": game.i18n.localize("WFRP4eEndeavours.Link.Recuperate")
				}
			}
	}

    // used to create the dialog
    content = `<div class="form-group" id="wfrp4e-endeavours-scripts-content"><label for="endeavour">${game.i18n.localize("WFRP4eEndeavours.Endeavour.Label")}</label>
    <select name="endeavour" id="endeavour">`
      for (let i = 0; i < Object.keys(endeavours).length; i++) {
        content += `<option value="${endeavours[Object.keys(endeavours)[i]]}">${Object.values(endeavourlabel)[i]}</option>`
      }
    content += `</select></div>`

	if (!travel) {
		title = game.i18n.localize("WFRP4eEndeavours.Endeavour.BAEndeavour")
		change = game.i18n.localize("WFRP4eEndeavours.Endeavour.TravelEndeavour")
	} else {
		title = game.i18n.localize("WFRP4eEndeavours.Endeavour.TravelEndeavour")
		change = game.i18n.localize("WFRP4eEndeavours.Endeavour.BAEndeavour")
	}

      let d = new foundry.applications.api.DialogV2({
        window : { title:title },
        content,
        buttons: [
          { action : "select", 
            icon: "fa-solid fa-helmet-safety",
            label: game.i18n.localize("WFRP4eEndeavours.Endeavour.Select"),
            callback: (_event, button) => {
              selectedEndeavour = "<h3>" + game.i18n.format("WFRP4eEndeavours.Endeavour.Election", {endeavour: new foundry.applications.ux.FormDataExtended(button.form).object.endeavour}) + "</b></h3>"
              generateChat(actor, selectedEndeavour)
            }
          },
          {
		    action : "travel",
            icon: "fa-solid fa-list-ul",
            label: change,
            callback: () => {
              endeavour(actor, !travel)
            }
          },
		  {
            action : "none", 
            icon: "fa-light fa-face-sleeping",  
            label: game.i18n.localize("WFRP4eEndeavours.Endeavour.None"),
            callback: () => {
              selectedEndeavour = "<h3>" + game.i18n.localize("WFRP4eEndeavours.Endeavour.Nothing") + "</h3>"
                generateChat(actor, selectedEndeavour)
            }
          }
        ],
		position : { width: 800 },
		options : { width: 500 },
    })

    d.render(true);

    // used to create the chat messages
    async function generateChat(actor, output) {
        let chatData = { 
            user: game.user._id, 
            speaker: {
                alias: actor.name
            },
            content: output, 
        }; 
        await ChatMessage.create(chatData, {}); 
    } 
}
