import { useState } from 'react'

export default function aboutUs() {
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    // 충돌 해결 후 주석
    // 충돌 테스트 두번째 주석
    // 충돌 테스트 세번째 주석
    let aa = 0;
    if(true == true) {
        aa = 1;
    } else {
        aa = 2;
    }
    return <h1>about us </h1>
}