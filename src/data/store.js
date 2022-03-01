import { writable } from "svelte/store";
import { themes } from "./themes";

// ---------- Theme ---------- 
const storedTheme = localStorage.getItem("theme");

export const theme = writable(storedTheme);

// Change the localStorage value of the CSS theme variables
// theme: object containing the variables
// name: theme name
const set_localStorage_theme = (theme, name) => {
	localStorage.setItem("bg-color", theme["bg-color"]);
    localStorage.setItem("bg-secondary-color", theme["bg-secondary-color"]);
    localStorage.setItem("nav-color", theme["nav-color"]);
	localStorage.setItem("color-primary", theme["color-primary"]);
	localStorage.setItem("color-lightGrey", theme["color-lightGrey"]);
	localStorage.setItem("color-grey", theme["color-grey"]);
	localStorage.setItem("color-darkGrey", theme["color-darkGrey"]);
	localStorage.setItem("color-error", theme["color-error"]);
	localStorage.setItem("color-success", theme["color-success"]);
	localStorage.setItem("color-1-min", theme["color-1-min"]);
	localStorage.setItem("color-6-min", theme["color-6-min"]);
	localStorage.setItem("color-7-min", theme["color-7-min"]);
	localStorage.setItem("color-7-15-min", theme["color-7-15-min"]);
	localStorage.setItem("font-color", theme["font-color"]);
    localStorage.setItem("theme", name);
}

// Set the CSS :root variables based on the localStorage variables
const set_root = () => {
	// alias for the :root
	let r = document.querySelector(':root');

    r.style.setProperty("--bg-color", localStorage.getItem("bg-color"));
	r.style.setProperty("--bg-secondary-color", localStorage.getItem("bg-secondary-color"));
	r.style.setProperty("--nav-color", localStorage.getItem("nav-color"));
  	r.style.setProperty("--color-primary", localStorage.getItem("color-primary"));
  	r.style.setProperty("--color-lightGrey", localStorage.getItem("color-lightGrey"));
 	r.style.setProperty("--color-grey", localStorage.getItem("color-grey"));
  	r.style.setProperty("--color-darkGrey", localStorage.getItem("color-darkGrey"));
	r.style.setProperty("--color-error", localStorage.getItem("color-error"));
	r.style.setProperty("--color-success", localStorage.getItem("color-success"));
	r.style.setProperty("--color-1-min", localStorage.getItem("color-1-min"));
	r.style.setProperty("--color-6-min", localStorage.getItem("color-6-min"));
	r.style.setProperty("--color-7-min", localStorage.getItem("color-7-min"));
	r.style.setProperty("--color-7-15-min", localStorage.getItem("color-7-15-min"));
	r.style.setProperty("--font-color", localStorage.getItem("font-color"));
}

theme.subscribe(value => {
	// set the theme based on the provided value
    let theme = {};
	
    if (!value || !(value in themes)){
		// Default is "Nord"
        theme = themes["Nord"];
    } else {
        theme = themes[value];
    }

	set_localStorage_theme(theme, value);
	set_root();
});

// ---------- Audio ---------- 
const storedAudio = localStorage.getItem("audio");

export const audio = writable(storedAudio);

audio.subscribe(value => {
	// Set the "audio" item
	// Default is "/audio/bell.mp3" (path to the bell sound)
    localStorage.setItem("audio", value ? value : "/audio/bell.mp3");
});

// ---------- Template ---------- 
const storedTemplate = localStorage.getItem("template");

export const template = writable(storedTemplate);

template.subscribe(value => {
	// Set the Notes Template
    localStorage.setItem("template", value ? value : "");
});

// ---------- Debates ---------- 
const storedDebates = localStorage.getItem("debates");

const parsed = JSON.parse(storedDebates);
export const debates = writable(parsed === null ? []: parsed);

debates.subscribe(value => {
	if (value) {
		localStorage.setItem("debates", JSON.stringify(value));
	} else {
		// default debate data
		let data = [
			{
				house: "1º Gov",
				call: [1,2,3,4],
				motion: "ECA",
				notes: "",
			}
		];

		localStorage.setItem("debates", JSON.stringify(data));
	}
});

