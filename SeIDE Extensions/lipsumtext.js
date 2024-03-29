Selenium.prototype.doLipsumText = function (options, varName) {
    var length = 5, type = "word", useHtmlTags = false, useWordCaps = false, useMarks = true, opts = options.split("|"), i = 0;
    for (i = 0; i < opts.length; i += 1) {
        if (opts[i]) {
            var countAndType = opts[i].match(/^(\d+) ?(word|paragraph)s?$/);
            if (countAndType) {
                length = countAndType[1];
                type = countAndType[2];
            }
        }

        if (opts[i] && opts[i].match(/^(htmltags)$/)) {
            useHtmlTags = true;
        }

        if (opts[i] && opts[i].match(/^(wordcaps)$/)) {
            useWordCaps = true;
        }

        if (opts[i] && opts[i].match(/^(nomarks)$/)) {
            useMarks = false;
        }
    }

    switch (type) {
    case "paragraph":
        storedVars[varName] = lipsumParagraphs(length, useHtmlTags, useWordCaps, useMarks);
        break;
    case "word":
        storedVars[varName] = lipsumWords(length, useWordCaps, useMarks);
        break;
    default:
        storedVars[varName] = lipsumWords(length, useWordCaps, useMarks);
    }
}

/*
 Returns paragraphs of words
*/
function lipsumParagraphs(length, useHtmlTags, useWordCaps, useMarks) {
    var output = "", i = 0;
    for (i = 0; i < length; i += 1) {
        if (i > 0 && useHtmlTags === false) {
            output += "\r\r";
        }

        if (useHtmlTags === true) {
            output += "<p>" + getWords(15, 300, useWordCaps, useMarks) + "</p>";
        } else {
            output += getWords(15, 300, useWordCaps, useMarks);
        }
    }

    return output;
}

/*
 Returns an exact number of words
*/
function lipsumWords(length, useWordCaps, useMarks) {
    // Return an exact number of words
    return getWords(length, length, useWordCaps, useMarks);
}

/*
 Returns a string of lorem ipsum words
 
 @author C. Peter Chen (wrote original script at http://dev-notes.com/code.php?q=37)
 @author Adam Courtemanche of http://agileadam.com (modified code for use in Selenium lipsumtext extension)
*/
function getWords(minWordCount, maxWordCount, useWordCaps, useMarks) {
 var loremIpsumWordBank = new Array("Thundercats","aesthetic","tousled","jean","shorts","Salvia","plaid","retro","shoreditch","etsy","bushwick","fashion","axe","kogi","vegan","sartorial","Echo","park","stumptown","pourover","viral","keffiyeh","bicycle","rights","bushwick","PBR","literally","high","life","carles","selfies","you","probably","havent","heard","of","them","farmtotable","Marfa","hella","brooklyn","banksy","DIY","readymade","irony","flannel","authentic","polaroid","Selvage","actually","tattooed","fingerstache","salvia","deep","v","Bespoke","bushwick","squid","artisan","etsy","selfies","ethnic","keytar","viral","food","truck","tousled","pickled","occupy","fingerstache","Carles","organic","ethical","blog","pourover","marfa","scenester","fap","chillwave","Next","level","tumblr","tryhard","put","a","bird","on","it","semiotics","retro","echo","park","marfa","keffiyeh","90s","pitchfork","yr","Cosby","sweater","swag","wolf","salvia","echo","park","Umami","twee","portland","raw","denim","butcher","jean","shorts","wolf","forage","flexitarian","next","level","pork","belly","fashion","axe","fap","Gentrify","salvia","synth","terry","richardson","semiotics","polaroid","YOLO","selvage","You","probably","havent","heard","of","them","pickled","swag","vegan","fashion","axe","cliche","stumptown","twee","letterpress","bicycle","rights","Cray","occupy","deep","v","tumblr","organiclorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim","ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea","commodo","consequat","duis","aute","irure","dolor","in","reprehenderit","in","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat","non","proident","sunt","in","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum","sed","ut","perspiciatis","unde","omnis","iste","natus","error","sit","voluptatem","accusantium","doloremque","laudantium","totam","rem","aperiam","eaque","ipsa","quae","ab","illo","inventore","veritatis","et","quasi","architecto","beatae","vitae","dicta","sunt","explicabo","nemo","enim","ipsam","voluptatem","quia","voluptas","sit","aspernatur","aut","odit","aut","fugit","sed","quia","consequuntur","magni","dolores","eos","qui","ratione","voluptatem","sequi","nesciunt","neque","porro","quisquam","est","qui","dolorem","ipsum","quia","dolor","sit","amet","consectetur","adipisci","velit","sed","quia","non","numquam","eius","modi","tempora","incidunt","ut","labore","et","dolore","magnam","aliquam","quaerat","voluptatem","ut","enim","ad","minima","veniam","quis","nostrum","exercitationem","ullam","corporis","suscipit","laboriosam","nisi","ut","aliquid","ex","ea","commodi","consequatur","quis","autem","vel","eum","iure","reprehenderit","qui","in","ea","voluptate","velit","esse","quam","nihil","molestiae","consequatur","vel","illum","qui","dolorem","eum","fugiat","quo","voluptas","nulla","pariatur?","at","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","obcaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","temporibus","autem","quibusdam","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","molestiae","non","recusandae","itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat");

    // By default, use the minWordCount as the number of words. If min and max are different,
    // get a random value between them
    var numWords = minWordCount;
    if (minWordCount != maxWordCount) {
        numWords = Math.floor(Math.random() * (maxWordCount - minWordCount)) + minWordCount;
    }

    var ret = "", i = 0;
    for (i = 0; i < numWords; i += 1) {
        var newTxt = loremIpsumWordBank[Math.floor(Math.random() * (loremIpsumWordBank.length - 1))];
        if (useMarks) {
            if (ret.substring(ret.length - 1, ret.length) === "." || ret.substring(ret.length - 1, ret.length) === "?") {
                newTxt = newTxt.capitalizeFirstLetter();
            }
        }

        if (useWordCaps) {
            newTxt = newTxt.capitalizeFirstLetter();
        }

        ret += " " + newTxt;
    }

    // Remove beginning space
    ret = ret.replace(/(^[ ])/, "");

    // Remove end punctuation marks
    ret = ret.replace(/([.?, ]$)/gi, "");

    // Capitalize the string and add a period at the end
    ret = ret.capitalizeFirstLetter() + ".";

    if (useMarks === false) {
        // Remove all punctuation marks
        ret = ret.replace(/([.?,])/gi, "");
    }

    return ret;
}

/*
 Provides a string method to capitalize the first letter of a string
*/
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};