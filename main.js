(function sliderFunc() {
    const getId = function(id) {
        return document.getElementById(id);
    } 

    const l_btn = getId("l-btn");
    const r_btn = getId("r-btn");
    const imgbox = getId("imgBox");
    const numBox = getId("num-box");
    const imgTag = imgbox.getElementsByTagName("img");

    let currentIndex = 0;

    // 依據圖片數量產生對應數字鈕
    function setNumberBtn() {
        
        if (imgTag.length) {
            for (let i = 0; i < imgTag.length; i++) {
                let html = "";
                html = "<div class='number-btn' data-index='"+ i +"'></div>"
                numBox.innerHTML += html;
            }
        }
    }

    setNumberBtn();  
    
    // 點選按鈕往左右切換圖片
    const n_btn = document.getElementsByClassName("number-btn");

    function changeIndex(index) {
        imgbox.style.left = "-" + index + "00%";
    }

    l_btn.addEventListener('click', function(e) {
        
        changeIndex(currentIndex - 1);
        currentIndex -= 1;

        if (currentIndex < 0) {
            currentIndex = n_btn.length - 1;
            changeIndex(currentIndex);
            return;
        }
    })

    r_btn.addEventListener('click', function(e) {

        changeIndex(currentIndex + 1);
        currentIndex += 1;

        if (currentIndex == n_btn.length) {
            currentIndex = 0;
            changeIndex(currentIndex);
            return;
        }
    })

    // 點選按鈕切換至指定圖片
    numBox.addEventListener('click', function(e) {
        changeIndex(e.target.dataset.index);
    })
})();