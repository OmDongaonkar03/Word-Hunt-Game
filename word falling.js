var words = [
    "apple", "car", "batman", "headphone", "pen", "angry", "bird", "kungfu", "panda", "shred",
    "yellow", "alto", "maserati", "abcd", "phone", "task", "given", "by", "didi", "canary",
    "postgraduate", "ocean", "mountain", "sunset", "coffee", "guitar", "piano", "elephant", "zebra", "dolphin","rocket", "planet", "star", "cloud", "rainbow", "thunder", "lightning", "river", "forest", "desert","camera", "laptop", "tablet", "printer", "keyboard", "mouse", "monitor", "speaker", "microphone", "battery","window", "door", "roof", "floor", "wall", "ceiling", "garden", "flower", "tree", "grass","book", "paper", "pencil", "eraser", "ruler", "compass", "calculator", "backpack", "bottle", "glass","plate", "spoon", "fork", "knife", "bowl", "cup", "mug", "kettle", "pot", "pan",
    "shirt", "pants", "shoes", "socks", "hat", "gloves", "scarf", "jacket", "coat", "umbrella",
    "cat", "dog", "fish", "hamster", "parrot", "snake", "turtle", "rabbit", "lion", "tiger",
    "dance", "sing", "paint", "draw", "write", "read", "speak", "listen", "think", "dream",
    "beach", "island", "volcano", "glacier", "cave", "canyon", "valley", "hill", "plateau", "cliff",
    "soccer", "basketball", "tennis", "golf", "rugby", "cricket", "volleyball", "baseball", "hockey", "boxing","pizza", "burger", "pasta", "salad", "soup", "sandwich", "cake", "cookie", "candy", "chocolate","train", "bus", "bike", "boat", "ship", "airplane", "helicopter", "motorcycle", "truck", "taxi","doctor", "teacher", "engineer", "artist", "chef", "pilot", "driver", "scientist", "writer", "musician","hospital", "school", "library", "museum", "park", "mall", "theater", "stadium", "airport", "restaurant", "diamond", "gold", "silver", "bronze", "pearl", "ruby", "emerald", "sapphire", "crystal", "jade","summer", "winter", "spring", "autumn", "monday", "friday", "sunday", "january", "july", "december","happy", "sad", "excited", "tired", "hungry", "thirsty", "sleepy", "energetic", "calm", "busy"];

var a = 0;
var b = words.length;
var random  = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
var random1 = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
var random2 = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
var random3 = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
var points =0;
var Inputword = '';
function start(){
	document.getElementById('words').style ="display:block";
}
document.getElementById('row1').innerHTML = words[random];
document.getElementById('row2').innerHTML = words[random1];
document.getElementById('row3').innerHTML = words[random2];
document.getElementById('row4').innerHTML = words[random3];
	
var textInput = document.getElementById('textInput');
textInput.addEventListener('keyup',check);
function check(){
	var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	for(var i = 0;i<= alpha.length;i++){
		if(event.key == alpha[i]){
			Inputword += event.key;
			if(Inputword == words[random]){
				points++
				random  = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
				document.getElementById('row1').innerHTML = words[random];
				document.getElementById('points').innerHTML = points;
				document.getElementById('result').innerHTML = "correct";
				document.getElementById('textInput').value = '';
				Inputword ='';
			}else if(Inputword == words[random1]){
				points++
				random1  = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
				document.getElementById('row2').innerHTML = words[random1];
				document.getElementById('points').innerHTML = points;
				document.getElementById('result').innerHTML = "correct";
				document.getElementById('textInput').value = '';
				Inputword ='';
			}else if(Inputword == words[random2]){
				points++
				random2  = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
				document.getElementById('row3').innerHTML = words[random2];
				document.getElementById('result').innerHTML = "correct";
				document.getElementById('points').innerHTML = points;
				document.getElementById('textInput').value = '';
				Inputword ='';
			}else if(Inputword == words[random3]){
				points++
				random3  = Math.floor(Math.random() * (+b + 1 - +a)) + +a;
				document.getElementById('row4').innerHTML = words[random3];
				document.getElementById('result').innerHTML = "correct";
				document.getElementById('points').innerHTML = points;
				document.getElementById('textInput').value = '';
				Inputword ='';
			}else{
				event.key = '';
			}
		}
	}
	if(event.key === 'Backspace'){
		Inputword = ''
	}
}