
function bubble_Sort(arr){

    let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));
