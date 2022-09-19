
function kiemtra() {
    let text = document.getElementById('text').value;
    let english = ['banana','orange','mango','grapefruit'];
    let viet = ['chuối','cam','xoài','bưởi'];
    let result=null;
    for (i = 0; i < 4; i++) {
        if (english[i] === text) {
            result = viet[i];
            break;
        }else {
            result='Từ bạn tìm kiếm không có';
        }
    }
    document.getElementById('result').innerHTML = 'Kết quả là: ' + result;
}