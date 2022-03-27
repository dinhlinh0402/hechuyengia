export default function rulesResult(arr) {
    // console.log('arr[0]: ', arr[0]);
    let result = [];
    const hasil = [
        'Chứng rối loạn ám ảnh cưỡng chế',
        'Rối loạn lo âu tổng quát hay còn gọi là rối loạn lo âu toàn thể (GAD)',
        'Chứng ám sợ chuyên biệt (SPECIFIC PHOBIA)',
        'Chứng sợ xã hội',
        'Rối loạn hoảng sợ với chứng sợ hãi Agoraphobia (hay rối loạn ám ảnh sợ khoảng trống)',
        'Rối loạn hoảng sợ nhưng không có chứng sợ hãi Agoraphobia (hay rối loạn ám ảnh sợ khoảng trống)',
        'Chứng sợ hãi Agoraphobia nhưng không có chứng rối loạn hoảng sợ',
        'Rối loạn lo âu khác'
    ]
    let i = 0;
    //1 | 0
    //a[0] = '1'
    if (arr[i++] === '1') {
        //2 3 4 5
        // 1 2 3 4 
        // 11111000000000000000000
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[0]);
        }
        // if (arr[i] === '1' && arr[++i] === '1' && arr[++i] === '1' && arr[++i] === '1') {
        //     result.push(hasil[0]);
        // }

        //6 7 8 9
        i = 5;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[1]);
        }

        //10 11 12 13
        i = 9;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[2]);
        }

        //14 15
        i = 13;
        if (arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[3]);
        }

        //16 17 18
        i = 15;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            //19 
            if (arr[i++] === '1') {
                //Rối loạn hoảng sợ với chứng sợ hãi Agoraphobia (hay rối loạn ám ảnh sợ khoảng trống)
                result.push(hasil[4]);
            } else {
                // Rối loạn hoảng sợ nhưng không có chứng sợ hãi Agoraphobia (hay rối loạn ám ảnh sợ khoảng trống)
                result.push(hasil[5]);
            }
        }

        //20 21 22 23 Agoraphobia
        i = 19;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            if (result.find(element => element === hasil[4])) {
                //không làm gì cả 
            } else if (result.find(element => element === hasil[5])) {
                // biến thành Rối loạn hoảng sợ với chứng sợ hãi Agoraphobia (hay rối loạn ám ảnh sợ khoảng trống)
                result[result.length - 1] = hasil[4];
            } else {
                // Chứng sợ hãi Agoraphobia nhưng không có chứng rối loạn hoảng sợ
                result.push(hasil[6]);
            }
        }

        if (result.length === 0) {
            // những lo lắng khác
            result.push(hasil[7]);
        }
    } else {
        result.push('Không có rối loạn lo âu nào được phát hiện.');
    }

    return result;
}