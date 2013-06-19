$(function() {

setTimeout(function(){
    //set text
    var text = "Design eyes catching website\n\n\n\n\n\n---  Develop modern webapp  ---  --- ---   We listen and learn from your needs, with love !!" ;

    //some vars. Split text into array of sentences
    var	sentences = text.split('.'),
    effect_el = $('#effect'),
    deferred;

    //func to process a particular sentence...
    function do_sentence(sentence_index) {

    //...split sentence into array of words
    var	words = sentences[sentence_index].split(' '),
    deferreds = [];

    //...for each word...
    for (var i=0, total_words=words.length; i<total_words; i++) {

    //...create and append an element for it
    var text = words[i]+(i < total_words-1 ? ' ' : '.');
    var el = $('<span />', {text: text}).appendTo(effect_el);

//...create a deferred object for it in our deferreds array
deferreds.push(deferred = $.Deferred());

//...fade it in over 0-3 seconds then manually resolve its deferred
el.fadeIn(Math.floor(Math.random() * 3000), (function(deferred) {
    return deferred.resolve;
    })(deferred));
}

//when all words faded in, do next sentence (if any)
$.when.apply(null, deferreds).done(function(){
    if (sentences[sentence_index+1]) do_sentence(sentence_index+1);
    });
}

//start the ball rolling with the first sentence
do_sentence(0);
},3000);
});
