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
			endeavourlabel["Brew Potion"] = game.i18n.localize("WFRP4eEndeavours.BA.Brew"),
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
			"Map the Route": game.i18n.localize("WFRP4eEndeavours.Travel.Map"),
			"Practice a Skill": game.i18n.localize("WFRP4eEndeavours.Travel.Practice"),
			"Recuperate": game.i18n.localize("WFRP4eEndeavours.Travel.Recuperate"),
			"Make Camp": game.i18n.localize("WFRP4eEndeavours.Travel.Camp")
		}
		if (game.settings.get('wfrp4e-endeavours', 'lustria')) {
			endeavourlabel = {
				"Find Shelter": game.i18n.localize("WFRP4eEndeavours.Travel.Shelter"),
				"Forage for Food": game.i18n.localize("WFRP4eEndeavours.Travel.ForageforFood"),
				"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Travel.Watch"),
				"Map the Route": game.i18n.localize("WFRP4eEndeavours.Travel.Map"),
				"Make Camp": game.i18n.localize("WFRP4eEndeavours.Travel.Camp"),
				"Practice a Skill": game.i18n.localize("WFRP4eEndeavours.Travel.Practice"),
				"Repair a Boat": game.i18n.localize("WFRP4eEndeavours.Travel.Boat")
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
			endeavours["Brew Potion"] = game.i18n.localize("WFRP4eEndeavours.Link.Brew"),
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
   } else {
		endeavours = {
			"Woodcraft": game.i18n.localize("WFRP4eEndeavours.Link.Woodcraft"),
			"Forage": game.i18n.localize("WFRP4eEndeavours.Link.Forage"),
			"Gather Information": game.i18n.localize("WFRP4eEndeavours.Link.Information"),
			"Keep Watch": game.i18n.localize("WFRP4eEndeavours.Link.Watch"),
			"Map the Route": game.i18n.localize("WFRP4eEndeavours.Link.Map"),
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
	}

    //contentUpdate();
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

      let d = new Dialog({
        title,
        content,
        buttons: {
          select: {
            icon: "<i class='fas fa-solid fa-user-helmet-safety'></i>",
            label: game.i18n.localize("WFRP4eEndeavours.Endeavour.Select"),
            callback: (html) => {
              selectedEndeavour = "<h3>" + game.i18n.format("WFRP4eEndeavours.Endeavour.Election", {endeavour: html.find('#endeavour')[0].value}) + "</b></h3>"
              generateChat(actor, selectedEndeavour)
            }
          },
          travel: {
            icon: "<i class='fas fa-solid fa-list-ul'></i>",
            label: change,
            callback: (html) => {
              endeavour(actor, !travel)
            }
          },
          none: {
            icon: "<i class='fa-light fa-face-sleeping'></i>",  
            label: game.i18n.localize("WFRP4eEndeavours.Endeavour.None"),
            callback: () => {
              selectedEndeavour = "<h3>" + game.i18n.localize("WFRP4eEndeavours.Endeavour.Nothing") + "</h3>"
                generateChat(actor, selectedEndeavour)
            }
          }
        },
          
    })
    d.options.width = 500
    d.position.width = 800
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
