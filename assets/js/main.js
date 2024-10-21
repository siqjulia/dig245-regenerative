
/* javascript */

const songs = [
    {
        title: "I'm Coming Out",
        artist: "Diana Ross",
        year: "1980",
        video: "https://www.youtube.com/embed/F-mjl63e0ms?si=mRzmPnMhQtF_89W1",
    },

    {
        title: "I Want to Break Free",
        artist: "Queen",
        year: "1984",
        video: "https://www.youtube.com/embed/f4Mc-NYPHaQ?si=3SggS9XyTQxK9qmH",
    },

    {
        title: "American Teenager",
        artist: "Ethel Cain",
        year: "2022",
        video: "https://www.youtube.com/embed/9Ed_WWmFy9I?si=EBwFsandCjSjkNba",
    },

    {
        title: "I Know A Place",
        artist: "MUNA",
        year: "2017",
        video: "https://www.youtube.com/embed/-t5gGm3NWU4?si=bgiwDSvWxLagyGsT",
    },

    {
        title: "YMCA",
        artist: "Village People",
        year: "1978",
        video: "https://www.youtube.com/embed/9Ed_WWmFy9I?si=k6X_H62chFMmv1M5",
    },

    {
        title: "We Are Family",
        artist: "Sister Sledge",
        year: "1979",
        video: "https://www.youtube.com/embed/uyGY2NfYpeE?si=aqONigKtOWqTg8GT",
        imp:  "While the four members of Sister Sledge are actual sisters, the song took on a deeper meaning with the gay community being one big family. The smash, written and produced by Bernard Edwards and Nile Rodgers of Chic, reached No. 2 on the Hot 100 in June 1979.",
    },

    {
        title: "She Keeps Me Warm",
        artist: "Mary Lambert",
        year: "2013",
        video: "https://www.youtube.com/embed/NhqH-r7Xj0E?si=2QmsJ56mRmZL9S9c",
    },

    {
        title: "Closer",
        artist: "Tegan and Sara",
        year: "2013",
        video: "https://www.youtube.com/embed/9e9NSMY8QiQ?si=MA9uukj_E8aP2P_l",
    },

    {
        title: "Good Luck, Babe!",
        artist: "Chapell Roan",
        year: "2024",
        video: "https://youtu.be/VZ-oGLluGAc?si=3Jj_iagkUL7cXITm",
    },

    {
        title: "Clairo",
        artist: "Sofia",
        year: "2019",
        video: "https://www.youtube.com/embed/L9l8zCOwEII?si=-vYzTurQy0tBWxt1",
    },

    {
        title: "Lunch",
        artist: "Billie Eilish",
        year: "2024",
        video: "https://www.youtube.com/embed/MB3VkzPdgLA?si=U8TF31HjR7vhK2MU",
    },

    {
        title: "Vogue",
        artist: "Madonna",
        year: "1990",
        video: "https://www.youtube.com/embed/GuJQSAiODqI?si=BAipC3_fC8nSP_3U",
    },

    {
        title: "Over the Rainbow",
        artist: "Judy Garland",
        year: "1939",
        video: "https://www.youtube.com/embed/EKiiSRzukAc?si=56tLpUy_imDCZp7p",
    },

    {
        title: "Lily Allen",
        artist: "F**k You",
        year: "2009",
        video: "https://www.youtube.com/embed/E5iUvpjii14?si=4dIDcuHFVbLcZmNC",
        imp: "Originally written about George W. Bush, the song took on a bigger meaning after Prop 8 — an anti-gay marriage state constitutional amendment — was passed in California. The ban was lifted in 2013.",
    },

    {
        title: "Follow Your Arrow",
        artist: "Kacey Musgraves",
        year: "2013",
        video: "https://www.youtube.com/embed/ofsvcA-2XmE?si=UDU8LIcZ56q9jSNx",
        imp: "The way Musgraves nonchalantly suggests to “kiss lots of boys — or kiss lots of girls, if that’s something you’re into,” was seen as an attack on traditional Christian values by some, while others said it was positive a shift for country music. The hit was crowned song of the year at the CMA Awards in November 2014", 
    },

    {
        title: "This Hell",
        artist: "Rina Sawayama",
        year: "2022",
        video: "https://www.youtube.com/embed/ekauErew4Bs?si=sCsOlrJ1cAW5wdUB",
    },

    {
        title: "Alien Superstar",
        artist: "Beyoncé",
        year: "2022",
        video: "https://www.youtube.com/embed/e_aT9pAGQo8?si=b4S8bgtuSh2RNI8l",
    },

    {
        title: "Padam Padam",
        artist: "Kylie Minogue",
        year: "2023",
        video: "https://www.youtube.com/embed/p6Cnazi_Fi0?si=jlGhJKilISF-NzOD",
    },

    {
        title: "Silk Chiffon",
        artist: "MUNA",
        year: "2022",
        video: "https://www.youtube.com/embed/1IvyGfWhoWo?si=wnUMVRZWAuQnDcRX",
    },



]

function randomArrayIndex(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener("click", loadRandom);
function loadRandom(){
	let result = randomArrayIndex(songs);
	console.log(result);
	let div = document.querySelector(".result");
};

