document.querySelector("#btn-generate").onclick = (e) => {
    const siteList = `네이버,https://www.naver.com
구글,https://www.google.com
W3C,https://www.w3.org/
MDN Web,https://developer.mozilla.org/en-US/
와삼,https://www.w3schools.com`;
    // console.log(siteList);

    const siteList2 = siteList.split("\n");
    // console.log(siteList2);

    const space = document.querySelector(".btn-wrapper")

    siteList2.forEach((text) => {
        const siteList3 = text.split(",");
        const siteName = siteList3[0];
        // console.log(siteName);
        const siteAddr = siteList3[1];
        // console.log(siteAddr);
    
        const button = `<button><a href="${siteAddr}" target="_blank">${siteName}</button>`;
        console.log(button);
        space.innerHTML += button;
    });
};