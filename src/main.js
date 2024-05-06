const blocks = document.querySelectorAll('.block');
const infoBlock = document.querySelector('.infoText');
const infoTitle = document.querySelector('.infoTitle');

const standardInfo = `Here will be some information about selected programming language. <br> <br>
            <span class="coloredText">Just click on a picture</span>.`

const cDescription =
    `
    C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.
    
    First released in 1985 as an extension of the C programming language, it has since expanded 
    significantly over time; as of 1997, C++ has object-oriented, generic, and functional features, 
    in addition to facilities for low-level memory manipulation for making things like microcomputers 
    or to make operating systems like Linux or Windows. It is almost always implemented as a compiled 
    language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, 
    Microsoft, Intel, Embarcadero, Oracle, and IBM.
    `;

const pythonDescription =
    `
    Python is a high-level, general-purpose programming language. 
    Its design philosophy emphasizes code readability with the use of significant indentation.

Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, 
including structured (particularly procedural), object-oriented and functional programming. 
It is often described as a "batteries included" language due to its comprehensive standard library.
    `;

const JSDectiption =
    `
    JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, 
    alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. 

Web browsers have a dedicated JavaScript engine that executes the client code. 
These engines are also utilized in some servers and a variety of apps. 
The most popular runtime system for non-browser usage is Node.js.

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. 
It has dynamic typing, prototype-based object-orientation, and first-class functions. 
It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. 
It has application programming interfaces (APIs) for working with text, dates, regular expressions, 
standard data structures, and the Document Object Model (DOM).
    `;

function clickHandle(event) {
    const currentBlock = event.currentTarget;

    const cPlusBlockId = 'imgC++';
    const pythonBlockId = 'imgPython';
    const JSBlockId = 'imgJS';

    // const infoTitleId = 'infoTitle';

    const currentBlockId = currentBlock.id;

    if (currentBlockId === cPlusBlockId) infoBlock.textContent = cDescription;
    if (currentBlockId === pythonBlockId) infoBlock.textContent = pythonDescription;
    if (currentBlockId === JSBlockId) infoBlock.textContent = JSDectiption;
}

// infoTitle.forEach(info => {
//     info.addEventListener('click', clickHandle)
// });

blocks.forEach(button => {
    button.addEventListener('click', clickHandle);
});