// This function is run on the player's end, by the owner(s) of the token(s) selected by the GM when the WFRP4e Endeavours macro was run.

export function endeavour(actor, travel) {
    let content = "";
    let selectedEndeavour;
    let endeavours;
    let endeavourlabel;
    
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
	}

    //contentUpdate();
    content = `<div class="form-group" id="wfrp4e-endeavours-scripts-content"><label for="endeavour">${game.i18n.localize("WFRP4eEndeavours.Endeavour.Label")}</label>
    <select name="endeavour" id="endeavour">`
      for (let i = 0; i < Object.keys(endeavours).length; i++) {
        content += `<option value="${endeavours[Object.keys(endeavours)[i]]}">${Object.values(endeavourlabel)[i]}</option>`
      }
    content += `</select></div>`

      let d = new Dialog({
        title: game.i18n.localize("WFRP4eEndeavours.Endeavour.Endeavour"),
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
            label: game.i18n.localize("WFRP4eEndeavours.Endeavour.Other"),
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
    d.options.width = 475
    d.position.width = 475
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
