function transform() {
    let text = document.getElementById("orig").value;
    let text_array = text.split('\n');
    
    let new_text = "";
        let getran = Math.floor( Math.random() * text_array.length );
        let newtext =text_array[getran];
        new_text += `${newtext}<br />`;
    document.getElementById("result").innerHTML = new_text;
}


