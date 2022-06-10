const traits = {
    race: [['Dragonborn', 18, 80], ['Dwarf', 18, 350], ['Elf', 18, 750], ['Gnome', 18, 475], ['Half-Elf', 18, 180], ['Half-Orc', 18, 75], ['Halfling', 18, 150], ['Human', 18, 80], ['Tiefling', 18, 100]],
    
    hairColor: ['black, dark brown, light brown', 'chestnut brown', 'auburn', 'red', 'orange red', 'copper', 'strawberry blonde', 'light blonde', 'golden blonde', 'dark blonde', 'grey', 'white', 'none'],
    
    profession: ['adventurer', 'farmer', 'craftsman', 'guard', 'soldier', 'acolyte', 'merchant'],
   
    home: ['capital city', 'large city', 'medium city', 'small town', 'village'],

    temper: [
        [ //Positive/Positive intersection
            [ //Conscientiousness
                "organized", "helpful", "steady", "perceptive", "persistent"
            ],
            [ //Agreeableness
                "dependable", "warm", "patient", "diplomatic", "sociable"
            ],
            [ //Neuroticism/stability
                "thorough", "tolerant", "unenvious", "inventive", "bold"
            ],
            [ //Openness
                "industrious", "tactful", "versatile", "creative", "dramatic"
            ],
            [ //Extraversion
                "alert", "cheerful", "confident", "worldly", "talkative"
            ]
        ],
        [ //Positive/negative intersection
            [ //Conscientiousness
                null, "lenient", "informal", null, "mischevious"
            ],
            [ //Agreeableness
                "stern", null, "stoic", "individualistic", "forceful"
            ],
            [ //Neuroticism
                null, "sensitive", null, "affectionate", "fliratious"
            ],
            [ //Openness
                "traditional", null, "steadfast", null, "wordy"
            ],
            [ //Extraversion
                "cautious", "agreeable", "unassuming", "introspective", null
            ]
        ],
        [ //Negative/positive intersection
            [ //Conscientiousness
                null, "rigid", "particular", "obstinate", "reserved"
            ],
            [ //Agreeableness
                null, null, "gullible", "dependent", "submissive"
            ],
            [ //Neuroticism
                "complacent", "insensitive", null, "unsophisticated", "sleepy"
            ],
            [ //Openness
                "unconventional", "shrewd", "paranoid", null, null
            ],
            [ //Extraversion
                "reckless", "crude", "high-strung", "pompous", null
            ]
        ],
        [ //Negative/Negative intersection
            [ //Conscientiousness
                "careless", "rude", "nosey", "ignorant", "sluggish"
            ],
            [ //Agreeableness
                "unreliable", "unkind", "irritable", "shallow", "reclusive"
            ],
            [ //Neuroticism
                "inconsistent", "selfish", "jealous", null, "cowardly"
            ],
            [ //Openness
                "immature", "uncharitable", "contemptuous", "closed-minded", "meek"
            ],
            [ //Extraversion
                "lazy", "cold", "insecure", "inarticulate", "shy"
            ]
        ]
    ],

    alignment: [['lawful', 'neutral', 'chaotic'],['good', 'neutral', 'evil']]
};

export { traits };