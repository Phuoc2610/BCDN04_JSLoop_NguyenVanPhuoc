/*** các số chẵn lẽ từ 0-100
 * Khối 1: input
 * soLe
 * soChan
 * 
 * Khối 2: các bước xử lý
 * B1: xử dụng vòng lặp chạy từ 0 đến 100
 * B2: điều kiện:
 * - nếu i % 2 ==0 => số chẵn
 * - còn lại => số lẻ
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * soLe
 * soChan
 */
document.getElementById("btnLoop1").onclick = function () {
    var soLe = "";
    var soChan = "";
    for (var i = 0; i < 100; i++) {
        // console.log("lần lặp"+i);
        if (i % 2 == 0) {
            soChan = soChan + i + " ";
            // console.log("Số chẵn:" + soChan);
        } else {
            soLe = soLe + i + " ";
            // console.log("Số lẻ: " + soLe);
        }
    }
    // var i = 0;
    // while (i < 100) {
    //     if (i % 2 == 0) {
    //         soChan = soChan + i + " ";
    //         console.log("Số chẵn:" + soChan);
    //     } else {
    //         soLe = soLe + i + " ";
    //         console.log("Số lẻ: " + soLe);
    //     }
    //     i++;
    // }

    document.getElementById("txtResult1").innerHTML = "Số chẵn: " + soChan + "<br>Số lẻ: " + soLe;
}

/*** tìm số chia hết cho 3
 * Khối 1: input
 * i : number
 * counter : biến đếm
 * 
 * Khối 2: các bước xử lý
 * B1: xử dụng vòng lặp chạy từ 0 đến 1000
 * B2: điều kiện:
 * - nếu i % 3 == 0 
 * => counter++ : biến đếm tăng lên 1 đơn vị
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * counter
 */
document.getElementById("btnLoop2").onclick = function () {

    var counter = 0;
    // var i = 0;
    // while (i < 1000) {
    //     if (i % 3 == 0) {
    //         counter++;
    //     }
    //     i++;
    // }
    for(var i=0;i<1000;i++){
        if(i%3==0){
            counter++;
        }
    }
    console.log('counter', counter);
    document.getElementById("txtResult2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000 có: " + counter + " số";
}

/*** tìm số nguyên dương nhỏ nhất
 * Khối 1: input
 * i : number
 * sum : tổng các số 
 * counter : biến đếm
 * 
 * Khối 2: các bước xử lý
 * B1: xử dụng vòng lặp chạy từ 0 đến 1000
 * B2: tổng các số từ 0 đến 1000 
 * => sum = sum +i
 * B2: điều kiện:
 * - nếu sum < 10000 
 * => counter++ : biến đếm tăng lên 1 đơn vị
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * counter
 */
document.getElementById("btnLoop3").onclick = function () {
    var i = 0;
    var sum = 0;
    var counter = 0;
    while (i < 1000) {
        sum = sum + i;
        i++
        if (sum < 10000) {
            counter++;
        }
    }
    document.getElementById("txtResult3").innerHTML = "Số nguyên dương nhỏ nhất: " + counter;
}

/*** tính tổng
 * Khối 1: input
 * x
 * n
 * luythua
 * sum
 * 
 * Khối 2: các bước xử lý
 * B1: lấy giá trị từ form
 * B2: xử dụng vòng lặp chạy từ 0 đến giá trị input
 * B3: lập công thức:
 * luyThua = Math.pow(x, i);
 * sum = sum + luyThua;
 * B4: hiển thị lên UI
 * 
 * Khối 3: output
 * sum
 */
function tinhTong() {
    var x = parseInt(document.getElementById("inputNumber1").value);
    var n = parseInt(document.getElementById("inputNumber2").value);
    var luyThua = 0;
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        // luyThua =x**(i);
        luyThua = Math.pow(x, i);
        sum = sum + luyThua;
    }
    document.getElementById("txtResult4").innerHTML = "Tổng: " + sum;
}
document.getElementById("btnLoop4").onclick = tinhTong;

/*** Tính giai thừa
 * Khối 1: input
 * n
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: lấy giá trị từ form
 * B2: xử dụng vòng lặp chạy từ 0 đến giá trị input
 * B3: lập công thức:
 * ketQua = ketQua * i;
 * B4: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
function tinhGiaiThua() {
    var n = parseInt(document.getElementById("inputNumber3").value);
    var ketQua = 1;
    for (var i = 1; i <= n; i++) {
        ketQua = ketQua * i;
    }
    document.getElementById("txtResult5").innerHTML = "Giai thừa: " + ketQua;
}
document.getElementById("btnLoop5").onclick = tinhGiaiThua;

/***
 * Khối 1: input
 * content
 * 
 * Khối 2: các bước xử lý
 * B1: tạo vòng lặp từ 1 đến 10
 * B2: điều kiện
 * -nếu (i+1)%2 ==0
 * => div chẵn 
 * - ngược lại
 * => div lẻ
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * content
 */
 document.getElementById("btnLoop6").onclick = function(){
    var content = "";
     for (var i = 0; i <10; i++){
         if ((i + 1) % 2 == 0){
            content+="<div class='bg-danger text-white'>div chẵn</div>";
         }
         else { 
            content+="<div class='bg-primary text-white'>div lẻ</div>";
         }
     }
     document.getElementById("txtResult6").innerHTML = content;
}

/***
 * Khối 1: input
 * n
 * soNguyenTo
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: láy dữ liệu từ form
 * B2: tạo function kiểm tra số nguyên tố
 * B3: tạo lòng lặp để hiển thị ra các số nguyên tố
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
function kiemTraSNT(n){
    var soNguyenTo = "";
    if (n < 2) {
        soNguyenTo = false;
    } else if (n == 2) {
        soNguyenTo = true;
    } else if (n % 2 == 0) {
        soNguyenTo = false;
    } else {
        for (var i = 3; i <= Math.sqrt(n);i+=2){
          if(n%i==0){
              soNguyenTo = false;
              break;    
          }
        }
        soNguyenTo =true;
    }
    return soNguyenTo;
}
function inSoNguyenTo(){
    var n = parseInt(document.getElementById("inputNumber4").value);
    var ketQua = "";   
    for(var i =1; i<=n;i++){
        if(kiemTraSNT(i)){
            ketQua+=i + " ";
        }
    }
    document.getElementById("txtResult7").innerHTML = "Số nguyên tố: "+ketQua;
}

document.getElementById("btnLoop7").onclick = inSoNguyenTo;

                