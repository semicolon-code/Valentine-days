function no(){
    var btnYes=document.getElementById('btnYes');
    var btnNo=document.getElementById('btnNo');

    var noButtonText=[
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;("

    ];
    var currentText=btnNo.textContent;
    var currentIndex=noButtonText.indexOf(currentText);
    var nextIndex=(currentIndex+1)%noButtonText.length;
    var nextText=noButtonText[nextIndex];
    btnNo.textContent=nextText;









    var currentSize=parseFloat(window.getComputedStyle(btnYes).fontSize);
    btnYes.style.fontSize=`${currentSize+15}px`;
}