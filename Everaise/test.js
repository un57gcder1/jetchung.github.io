const posts = {
    post1 = {
        id: "blah1",
        children: [reply1, reply2],
        date: new Date(),
        title: 'I just poured something in my cup',
        postText: "hello test test",
        author: {
            name: 'J. Cole',
            avatarUrl: 'https://www.biography.com/.image/t_share/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg',
        }
    },

    reply2 = {
        id: "blah2",
        date: new Date(),
        title: "I buy a new car for the bitch (for real)",
        postText: "hello test test",
        author: {
            name: '21 Savage',
            avatarUrl: 'https://www.biography.com/.image/t_share/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg',
        },
    },

    reply1 = {
        id: "meep1",
        date: new Date(),
        title: 'I just poured something in my cup - response',
        postText: "hello test test response",
        author: {
            name: 'J. Cole',
            avatarUrl: 'https://www.biography.com/.image/t_share/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg',
        }
    }

}