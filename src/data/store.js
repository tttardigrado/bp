import { writable } from "svelte/store";
import { themes } from "./themes";

// ---------- Theme ---------- 
const storedTheme = localStorage.getItem("theme");

export const theme = writable(storedTheme);

theme.subscribe(value => {
    let t = {}
    if (!value || !(value in themes)){
        t = themes["Nord"]
    } else {
        t = themes[value]
    }

    localStorage.setItem("bg-color", t["bg-color"]);
    localStorage.setItem("bg-secondary-color", t["bg-secondary-color"]);
    localStorage.setItem("nav-color", t["nav-color"]);
	localStorage.setItem("color-primary", t["color-primary"]);
	localStorage.setItem("color-lightGrey", t["color-lightGrey"]);
	localStorage.setItem("color-grey", t["color-grey"]);
	localStorage.setItem("color-darkGrey", t["color-darkGrey"]);
	localStorage.setItem("color-error", t["color-error"]);
	localStorage.setItem("color-success", t["color-success"]);
	localStorage.setItem("color-1-min", t["color-1-min"]);
	localStorage.setItem("color-6-min", t["color-6-min"]);
	localStorage.setItem("color-7-min", t["color-7-min"]);
	localStorage.setItem("color-7-15-min", t["color-7-15-min"]);
	localStorage.setItem("fontColors", t["font-color"]);
    localStorage.setItem("theme", value);

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
	r.style.setProperty("--fontColors", localStorage.getItem("font-color"));
    
});

// ---------- Audio ---------- 
const storedAudio = localStorage.getItem("audio");

export const audio = writable(storedAudio);

audio.subscribe(value => {
    localStorage.setItem("audio", value ? value : "/audio/bell.mp3");
});

// ---------- Template ---------- 
const storedTemplate = localStorage.getItem("template");

export const template = writable(storedTemplate);

template.subscribe(value => {
    localStorage.setItem("template", value ? value : "");
});

// ---------- Debates ---------- 
const storedDebates = localStorage.getItem("debates");
const parsed = JSON.parse(storedDebates)
export const debates = writable(parsed === null ? []: parsed);

debates.subscribe(value => {
	if (value) {
		localStorage.setItem("debates", JSON.stringify(value));
	} else {
		let data = [
			{
				house: "Opening Gov",
				call: [1,2,3,4],
				motion: "THB",
				notes: "",
			}
		]
		localStorage.setItem("debates", JSON.stringify(data))
	}
    
});

