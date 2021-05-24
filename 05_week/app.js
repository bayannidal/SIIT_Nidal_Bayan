document.body.style.padding = '0';
document.body.style.margin = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.backgroundColor = '#f8eded';
document.body.style.fontFamily = 'KoHo, sans-serif'


let divContainer = document.createElement('div');
divContainer.style.margin = '30px';
divContainer.style.backgroundColor = 'black';
divContainer.style.boxShadow = '0 0 5px 0px black';
divContainer.style.borderRadius = '50px'
divContainer.style.color = 'white';
divContainer.style.height = '100%';
divContainer.style.padding = '20px';
document.body.appendChild(divContainer);
let divInput = document.createElement('div')
let inputEmail = document.createElement('input');
inputEmail.placeholder = 'Name';

let inputCom = document.createElement('textarea');
let inputTag = document.getElementsByTagName('input');
inputCom.placeholder = 'Type here..';

let buttonCom = document.createElement('button');
buttonCom.textContent = 'Comment';
buttonCom.style.backgroundColor = "inherit";
buttonCom.style.height = '30px';
buttonCom.style.borderRadius = '30px';
buttonCom.style.margin = '30px';
buttonCom.style.outline = 'none';
buttonCom.style.border = 'none';
buttonCom.style.boxShadow = '0 0 2px 2px white';
buttonCom.style.textAlign = 'center';
buttonCom.style.color = 'white';
buttonCom.style.fontWeight = '700';
buttonCom.style.fontSize = '17px'
buttonCom.classList.add('your-class');

let commentSection = document.createElement('div');
commentSection.style.display = 'flex';
commentSection.style.flexDirection = 'column';
commentSection.style.flexWrap = 'wrap';
commentSection.style.overflowY = 'none';
let username = document.createElement('h2');
var emailTxt = document.createElement('span');
// emailTxt.textContent = 'dog';
// divInput.appendChild(emailTxt)
divInput.appendChild(inputEmail);
// divInput.appendChild(buttonEmail);

// var commentTxt = document.createElement('span');

// commentTxt.textContent = 'dog';
// divInput.appendChild(commentTxt);

divInput.appendChild(inputCom);

divInput.style.display = 'flex';
divInput.style.flexWrap = 'wrap';
divInput.style.justifyContent = 'space-around'
inputCom.style.backgroundColor = 'inherit';
inputCom.style.height = '100px';
inputCom.style.borderRadius = '30px';
inputCom.style.border = 'none';
// inputCom.style.boxShadow = '1px 1px 5px 0 #5e5992';
inputCom.style.margin = '30px 0';
inputCom.style.padding = '0 10px';
inputCom.style.outline = 'none';
inputCom.style.textAlign = 'center';
inputCom.style.color = 'white';
inputCom.classList.add('your-class');
inputCom.style.fontSize = '1rem';
inputCom.style.fontWeight = '400';
divInput.appendChild(buttonCom);
divContainer.appendChild(commentSection);
commentSection.appendChild(divInput)


for (var i = 0; i < inputTag.length; i++) {
    inputTag[i].style.backgroundColor = 'inherit';
    inputTag[i].style.height = '30px';
    inputTag[i].style.borderRadius = '30px';
    inputTag[i].style.margin = '30px 0';
    inputTag[i].style.outline = 'none';
    inputTag[i].style.border = 'none';

    // inputTag[i].style.boxShadow = '1px 1px 5px 0 #5e5992';
    inputTag[i].style.textAlign = 'center';
    inputTag[i].style.color = 'white';
    inputTag[i].classList.add('your-class');
    inputTag[i].style.fontSize = '16px';
    inputTag[i].style.fontWeight = '400';
}



buttonCom.addEventListener('click', function () {

    let commentInput = document.createElement('div');
    let deleteCom = document.createElement('div');
    let divCommentBox = document.createElement('div');

    let username = document.createElement('h1');
    username.textContent = inputEmail.value;
    commentInput.appendChild(username);

    let comment = document.createElement('p');
    comment.textContent = inputCom.value;
    commentInput.appendChild(comment);

    let deleteComBtn = document.createElement('button');

    commentInput.style.flexWrap = 'wrap';

    deleteComBtn.textContent = 'Delete';
    deleteCom.appendChild(deleteComBtn);

    divCommentBox.appendChild(commentInput);
    divCommentBox.appendChild(deleteCom);
    commentSection.appendChild(divCommentBox);
    deleteComBtn.style.backgroundColor = "inherit";
    deleteComBtn.style.height = '30px';
    deleteComBtn.style.borderRadius = '30px';
    deleteComBtn.style.margin = '30px';
    deleteComBtn.style.outline = 'none';
    deleteComBtn.style.border = 'none';
    deleteComBtn.style.textAlign = 'center';
    deleteComBtn.style.color = 'black';
    deleteComBtn.style.fontWeight = '700';

    divCommentBox.style.display = 'flex';
    divCommentBox.style.alignItems = 'center';
    divCommentBox.style.justifyContent = 'space-between';
    divCommentBox.style.backgroundColor = 'white';
    divCommentBox.style.boxShadow = '0 0 5px 0px white';
    divCommentBox.style.margin = '0 auto 20px 0';
    divCommentBox.style.color = 'black';

    divCommentBox.style.padding = '0 0 0 40px';
    divCommentBox.style.borderRadius = '50px';
    divCommentBox.style.width = 'auto';
    divCommentBox.style.height = 'auto';

    deleteComBtn.addEventListener('click', function () {
        commentSection.removeChild(divCommentBox);

    })
})



