
/* javascript */

const songs = [

/* The descriptions were not written by me. They come from Rolling Stone: https://www.rollingstone.com/music/music-lists/25-essential-lgbtq-pride-songs-199348/mary-lambert-she-keeps-me-warm-2013-112091/ and Billboard Music: https://www.billboard.com/lists/lgbtq-anthems-queer-pride-songs/y-m-c-a-village-people-1978/*/
    {
        title: "I'm Coming Out",
        artist: "Diana Ross,",
        year: "1980",
        video: "https://www.youtube.com/embed/maJgjTp0NQ0?si=XdxsyJkFtBS_ShLn",
        imp: "Even at its conception, this song was a gay anthem: After seeing three drag queens impersonate Ross at a New York discotheque, Nile Rodgers and Bernard Edwards were inspired to write something for her gay fandom. Ross almost got cold feet releasing it but Rodgers convinced her to go with it. She took his advice and landed her sixth Hot 100 top five hit on the Hot 100 as a solo artist. (The song reached No. 5 in November 1980.)",
    },

    {
        title: "I Want to Break Free",
        artist: "Queen,",
        year: "1984",
        video: "https://www.youtube.com/embed/f4Mc-NYPHaQ?si=3SggS9XyTQxK9qmH",
        imp: "The gayest song from Queen’s catalogue was surprisingly not written by Freddie Mercury, but rather bassist John Deacon. This anthem had the whole band dress in soap opera-inspired drag characters for its music video.",
    },

    {
        title: "American Teenager",
        artist: "Ethel Cain,",
        year: "2022",
        video: "https://www.youtube.com/embed/9Ed_WWmFy9I?si=EBwFsandCjSjkNba",
    },

    {
        title: "I Know A Place",
        artist: "MUNA,",
        year: "2017",
        video: "https://www.youtube.com/embed/-t5gGm3NWU4?si=bgiwDSvWxLagyGsT",
        imp: "Released shortly after the 2016 Orlando nightclub shooting, MUNA’s “I Know a Place” provides a virtual safe space of acceptance and solidarity, where queer folks can come and be received with understanding and love.",
    },

    {
        title: "YMCA",
        artist: "Village People,",
        year: "1978",
        video: "https://www.youtube.com/embed/9Ed_WWmFy9I?si=k6X_H62chFMmv1M5",
        imp: "This disco classic was taken by many as an implicit ode to the gym’s reputation as a popular cruising location — it even comes from an album titled Cruisin’. “Y.M.C.A.” hit No. 2 on the Hot 100 in February 1979, but has since become a parody of itself.",
    },

    {
        title: "We Are Family",
        artist: "Sister Sledge,",
        year: "1979",
        video: "https://www.youtube.com/embed/uyGY2NfYpeE?si=aqONigKtOWqTg8GT",
        imp: "While the four members of Sister Sledge are actual sisters, the song took on a deeper meaning with the gay community being one big family. The smash, written and produced by Bernard Edwards and Nile Rodgers of Chic, reached No. 2 on the Hot 100 in June 1979.",
    },

    {
        title: "She Keeps Me Warm",
        artist: "Mary Lambert,",
        year: "2013",
        video: "https://www.youtube.com/embed/NhqH-r7Xj0E?si=2QmsJ56mRmZL9S9c",
        imp: "An outspoken lesbian and a Christian, Seattle singer-songwriter Mary Lambert sheds her shame and gets swept away by the ultimate dream girl in “She Keeps Me Warm.” Lambert drafted the song from her hook in “Same Love,” the 2012 hit single by Macklemore and Ryan Lewis. The trio would later make headlines after the 2014 Grammy Awards, where their landmark performance of the song would soundtrack a mass wedding between 33 gay and straight couples. (Not to mention it was officiated by Queen Latifah.) “I’m not crying on Sundays,” she sings impassionately – and it feels just like a prayer.",
    },

    {
        title: "Closer",
        artist: "Tegan and Sara,",
        year: "2013",
        video: "https://www.youtube.com/embed/9e9NSMY8QiQ?si=MA9uukj_E8aP2P_l",
        imp: "Canadian sister act Tegan and Sara capture the thrill behind fleeting moments of intimacy in “Closer,” a track from their platinum 2013 LP Heartthrob. The video depicts friends and lovers of all genders, cuddling in blanket forts and taking cosmetic trust falls by applying each others' makeup. It’s a breathtaking portrait of queer friendship, describing love that exists not just in the sexual or romantic sense, but as a broader spectrum of good feelings.", 
    },

    {
        title: "Good Luck, Babe!",
        artist: "Chapell Roan,",
        year: "2024",
        video: "https://youtu.be/VZ-oGLluGAc?si=3Jj_iagkUL7cXITm",
        imp: "It's not easy when the person you love isn’t as accepting of their identity as you are, but on her breakout hit, Roan dances through the heartbreak. She also attempts to save a lot of time for others who are questioning their sexual orientations with lines like “You can kiss a hundred boys in bars … Make a new excuse, another stupid reason” and “You'd have to stop the world just to stop the feeling."
    },

    {
        title: "Sofia",
        artist: "Clairo,",
        year: "2019",
        video: "https://www.youtube.com/embed/L9l8zCOwEII?si=-vYzTurQy0tBWxt1",
        imp: "On “Sofia,” Clairo touches on the painful — and all too relatable — internalized shame she and/or her partner feels about their same-sex romance. “Know that you and I shouldn’t feel like a crime,” she sings on the deceptively danceable track.",
    },

    {
        title: "Lunch",
        artist: "Billie Eilish,",
        year: "2024",
        video: "https://www.youtube.com/embed/MB3VkzPdgLA?si=U8TF31HjR7vhK2MU",
        imp: "When Eilish dropped her third studio album Hit Me Hard and Soft in 2024, the immediate standout track was “Lunch” — a swaggering, flirtatious jam that finds the star explicitly singing about her attraction to women for the first time ever.",
    },

    {
        title: "Vogue",
        artist: "Madonna,",
        year: "1990",
        video: "https://www.youtube.com/embed/GuJQSAiODqI?si=BAipC3_fC8nSP_3U",
        imp: "It's quite the task to choose just one track from Madonna's discography, but the safest bet is this song, inspired by queer vogueing subculture. The tune was originally intended as a B-side, but ended up topping the Hot 100 for three weeks in the spring of 1990.",
    },

    {
        title: "Over the Rainbow",
        artist: "Judy Garland,",
        year: "1939",
        video: "https://www.youtube.com/embed/EKiiSRzukAc?si=56tLpUy_imDCZp7p",
        imp: "Dating back to at least World War II — when homosexual acts were illegal — the term “friend of Dorothy” was underground slang for a gay man. While investigating homosexuality in Chicago, the Naval Criminal Investigative Service discovered that gay men used this term to refer to themselves. They started a massive witch-hunt for the elusive “Dorothy” in hopes that she would reveal names of gay service members. This universal song of yearning from the immortal The Wizard of Oz won an Oscar for best original song.",
    },

    {
        title: "F**k You",
        artist: "Lily Allen,",
        year: "2009",
        video: "https://www.youtube.com/embed/E5iUvpjii14?si=4dIDcuHFVbLcZmNC",
        imp: "Originally written about George W. Bush, the song took on a bigger meaning after Prop 8 — an anti-gay marriage state constitutional amendment — was passed in California. The ban was lifted in 2013.",
    },

    {
        title: "Follow Your Arrow",
        artist: "Kacey Musgraves,",
        year: "2013",
        video: "https://www.youtube.com/embed/ofsvcA-2XmE?si=UDU8LIcZ56q9jSNx",
        imp: "The way Musgraves nonchalantly suggests to “kiss lots of boys — or kiss lots of girls, if that’s something you’re into,” was seen as an attack on traditional Christian values by some, while others said it was positive a shift for country music. The hit was crowned song of the year at the CMA Awards in November 2014",
    },

    {
        title: "This Hell",
        artist: "Rina Sawayama,",
        year: "2022",
        video: "https://www.youtube.com/embed/ekauErew4Bs?si=sCsOlrJ1cAW5wdUB",
        imp: "Sawayama wrote the song in response to attacks on the LGBTQ community, often motivated by religious beliefs. She said, 'When the world tells us we don't deserve love and protection, we have no choice but to give love and protection to each other.'",
    },

    {
        title: "Alien Superstar",
        artist: "Beyoncé,",
        year: "2022",
        video: "https://www.youtube.com/embed/e_aT9pAGQo8?si=b4S8bgtuSh2RNI8l",
    },

    {
        title: "Silk Chiffon",
        artist: "MUNA,",
        year: "2022",
        video: "https://www.youtube.com/embed/1IvyGfWhoWo?si=wnUMVRZWAuQnDcRX",
        imp: "Silk Chiffon compares the softness of queer love to that of silk. The music video pays homage to the 1999 lesbian cult classic 'But I'm a Cheerleader' and follows a girl who is sent to a conversion therapy camp, where she falls for another girl. The video ends with the girls escaping the camp and performing the song at a gay bar.", 
    },

    {
        title: "Girls Like Girls",
        artist: "Haley Kiyoko",
        year: "2015",
        video: "Hayley Kiyoko, affectionately known by fans as "Lesbian Jesus," marked a significant moment in music history with her 2015 breakthrough hit 'Girls Like Girls.' The song, co-written by Kiyoko, boldly narrates a story of same-sex love and desire, breaking barriers in the pop music scene with its unapologetic portrayal of lesbian relationships as lesbian songs often do.",
    },

    {
        title: "I'm Every Woman",
        artist: "Chaka Khan",
        year: "1978",
        video: "https://www.youtube.com/embed/DVDCNmdi7QI?si=G8VL9kxYUkeian2L",
        imp: "Khan’s proud declaration of “I’m Every Woman” now holds an important place in Roe-era women’s liberation, and has since been adopted by queer and trans women everywhere as an unequivocal anthem to fighting for the rights they deserve.",
    },



]

function randomArrayIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


document.addEventListener("click", loadRandom);
function loadRandom() {
    let result = randomArrayIndex(songs);
    console.log(result);
    let div = document.querySelector(".result");

    div.innerHTML = `
       <iframe width="700" height="500" src="${result.video}"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> 
    </iframe>
        <h3 class="title">${result.title}</h3>
        <h4 class="artist">${result.artist}</h4>
        <h5 class="year">${result.year}</h5>
        <div class="rainbow-box">${result.imp}> 
           

    `;
};