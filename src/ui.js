/*
	Burak's awesomeee 30 lines fail-safe localisation library
	MIT, v1.0.7
*/

import uitext from '../uitext';

export default function t(lang, UITextIdentifier, variableArray){
	lang = lang ? lang : "en";

	if(!uitext[lang+"_json"]){
		lang = "en";
	}

	if(typeof variableArray == "string" || typeof variableArray == "number"){
		let text = uitext[lang+"_json"][UITextIdentifier];
		if(text) return text.replace("$1", variableArray);
		return "UnSupportedIdentifier";
	}else if(typeof variableArray == "array"){
		let text = uitext[lang+"_json"][UITextIdentifier];
		if(text){
			variableArray.forEach((variable, i) => {
				let variableIdentifier = `${i+1}`;
			 	text = text.replace(variableIdentifier, variable);
			});
			return text;
		}else{
			return "UnSupportedIdentifier";
		}

	}else{
		let text = uitext[lang+"_json"][UITextIdentifier];
		if(text) return text;
		return "UnSupportedIdentifier";
	}
}
