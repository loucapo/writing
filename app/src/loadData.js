var config = require('config');
var sqlFixtures = require('sql-fixtures');
var _ = require('lodash');
var faker = require('faker');
faker.seed(123);

var knex = require('knex')({
    client: 'pg',
    connection: config.postgres.config,
    pool: { min:0, max:7}
});

// TODO:
// break fixtures out to another file
// allow calling of fixtures other than the hardcoded dataSpec
// allow accepting a faker seed
// should probably print the seed that's actually used

var fixtureCreator = new sqlFixtures(knex);

var simpleActivity = function() {
    return {
        id: faker.random.uuid(),
        course_id: 1234,
        title: faker.fake('Assignment {{random.words}}'),
        created_by_id: faker.random.uuid(),
        created_date: '2017-04-07',
        prompt: null,
        modified_by_id: null,
        modified_date: null
    };
};

var simpleQuickFeedback = function() {
    return {
        id: faker.random.uuid(),
        title: faker.random.words(),
        description: "description...",
        created_by_id: faker.random.uuid(),
        created_date: "2017-01-01",
        modified_by_id: faker.random.uuid(),
        modified_date: null
    };
};

var dataSpec = {
  activity: [
    simpleActivity(),
    simpleActivity(),
    simpleActivity()
  ],

  draft: [
    // { id: '',
    //   activity_id: '',
    //   instructions: '',
    //   index: '',
    //   created_date: '',
    //   updated_at: ''
    // }
  ],

  quick_feedback: _.times(5, simpleQuickFeedback),

  criteria: [
    {
      id: "4a7e811e-076d-488b-a523-94169c971e6d",
      title: "Thesis",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Thesis offers a clear and insightful judgment of the text",
      rubric_level_2: "Thesis offers a judgment of the text",
      rubric_level_3: "Thesis does not present a critical response to the text",
      rubric_level_4: "Thesis is buried or unclear",
      goal_option_1: 'dagobah mace ben calrissian dooku k-3po kamino. Mandalore chewbacca jade jar lando yoda lando.',
      goal_option_2: 'a han luuke wedge calamari endor thrawn. Hutt moff lobot wedge mon darth',
      goal_option_3: 'inks. Padmé jabba mon mace jango organa utapau anakin darth',
      created_by_id: "83918e6b-8918-43e0-b55f-41f126dec081",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "bd500741-01d1-4ddc-b08b-dea70d55995f",
      title: "Evidence",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Well-chosen evidence informs and supports the thesis",
      rubric_level_2: "Includes relevant evidence, though readers may need more evidence to be convinced",
      rubric_level_3: "Insufficient evidence",
      rubric_level_4: "Limited or no evidence",
      goal_option_1: 'ko mayagil ryn mon wicket maarek fel paploo',
      goal_option_2: 'ando tono. Xappyh nelvaanian nien piett chadra-fan whitesun. Jerjerrod fode caamasi skywalker. Marek doldur palpatine organa. Illum aleena mantell ahsoka a',
      goal_option_3: 'moff depa. Ubese jinn dantooine ka beru dug',
      created_by_id: "d315a49f-8910-46e2-b24b-6a7a265ed8a2",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "f01ed383-78e9-4089-867a-70e8911bbace",
      title: "Thesis",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Introduces a focused, arguable thesis",
      rubric_level_2: "Introduces an arguable thesis that lacks focus",
      rubric_level_3: "Introduces a vague or broad thesis",
      rubric_level_4: "Lacks an arguable thesis",
      goal_option_1: 'wicket maarek fel paploo falleen. Moff mustafar garm devaronian mon. Beru zuggs n',
      goal_option_2: 'ako mayagil ryn mon wicket maarek f',
      goal_option_3: 'ahsoka antilles yuuzhan quadrinaros r4-p17 mod. Thennqora darpa trio',
      created_by_id: "a5538cab-003c-4406-9f10-a7b423961f78",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "dd6f10e6-f07d-4c70-b5c6-2a3c5e3d35e9",
      title: "Logical appeals",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Develops multiple effective appeals",
      rubric_level_2: "Develops an effective appeal",
      rubric_level_3: "Introduces an effective appeal that needs further development",
      rubric_level_4: "Uses weak or no appeals",
      goal_option_1: 'anx ka pellaeon bren subterrel. -1b dor fel carondian ric. Gev mirax jawa darth tapani. Duro quelli luuke togruta shistavanen rune.',
      goal_option_2: 'rinaros lars epicanthix. Terrik polis bespin thisspias boz dart',
      goal_option_3: 'Bibble ansion nunb keshiri jango. Charal drovian kyp ozzel freedon thisspiasi',
      created_by_id: "d8cc5bd4-f1ed-401f-be68-693f6a3d9ae0",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "02a8ae4e-2ae3-4390-bcb5-cadb6324567a",
      title: "Counterargument",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Develops a credible counterargument and addresses it adequately",
      rubric_level_2: "Introduces a credible counterargument",
      rubric_level_3: "Introduces a weak counterargument",
      rubric_level_4: "Does not address counterarguments",
      goal_option_1: 'ino moff. Padmé obi-wan ben boba hutt mandalore wampa yoda. Cade darth bo',
      goal_option_2: 'walker. Kit r2-d2 solo organa darth skywalker.',
      goal_option_3: 'go mace qui-gon padmé darth gonk. Hutt moff darth sebulba bothan. Han mustafar calamar',
      created_by_id: "2acba63b-ee77-4a0c-9d91-2d20ee436e88",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "3122600f-1c09-4f2d-bf8e-b6e84bfb6b1f",
      title: "Interpretation/Analysis",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Clear interpretation and insightful analysis",
      rubric_level_2: "Interpretation /analysis is accurate and advances the argument",
      rubric_level_3: "Includes some discussion of how the text makes its point",
      rubric_level_4: "Limited or no analysis; does not look at how the text makes its point",
      goal_option_1: 'ino moff. Padmé obi-wan ben boba hutt mandalore wampa yoda. Cade darth bo',
      goal_option_2: 'walker. Kit r2-d2 solo organa darth skywalker.',
      goal_option_3: 'go mace qui-gon padmé darth gonk. Hutt moff darth sebulba bothan. Han mustafar calamar',
      created_by_id: "c463f9bc-4aeb-41e8-9360-e328270f9d55",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "6e6743ea-04fc-449e-8af7-8c368bf5c11c",
      title: "Organization",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Analysis is well organized, with clear topic sentences and transitions",
      rubric_level_2: "Well organized on the whole, but occasionally needing work on paragraph coherence or transitions",
      rubric_level_3: "Connection among ideas is not a,lways clear; there may be more than one point per paragraph",
      rubric_level_4: "Ideas are difficult to follow",
      goal_option_1: 'anx ka pellaeon bren subterrel. -1b dor fel carondian ric. Gev mirax jawa darth tapani. Duro quelli luuke togruta shistavanen rune.',
      goal_option_2: 'rinaros lars epicanthix. Terrik polis bespin thisspias boz dart',
      goal_option_3: 'Bibble ansion nunb keshiri jango. Charal drovian kyp ozzel freedon thisspiasi',
      created_by_id: "b8857f75-df5c-458a-b1c2-f17d25aedcfd",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "678ef716-4acf-42d2-bef2-583ceb891bfb",
      title: "Knowledge of Conventions",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Fluent, controlled discussion",
      rubric_level_2: "Sufficient control of grammar, usage, and mechanics",
      rubric_level_3: "Errors in grammar, usage, or mechanics detract from the writing",
      rubric_level_4: "Errors in grammar, usage, or mechanics prevent understanding",
      goal_option_1: 'ko mayagil ryn mon wicket maarek fel paploo',
      goal_option_2: 'ando tono. Xappyh nelvaanian nien piett chadra-fan whitesun. Jerjerrod fode caamasi skywalker. Marek doldur palpatine organa. Illum aleena mantell ahsoka a',
      goal_option_3: 'moff depa. Ubese jinn dantooine ka beru dug',
      created_by_id: "1edc2770-7107-4d72-903f-863f743a9162",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "91db94ee-a6f1-4be5-911c-9e7b8b992531",
      title: "Claims",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Claims clearly relate to thesis",
      rubric_level_2: "Introduces relevant claims that need further development",
      rubric_level_3: "Introduces claims that do not all support the thesis",
      rubric_level_4: "Lacks sufficient claims to support thesis",
      goal_option_1: 'dagobah mace ben calrissian dooku k-3po kamino. Mandalore chewbacca jade jar lando yoda lando.',
      goal_option_2: 'a han luuke wedge calamari endor thrawn. Hutt moff lobot wedge mon darth',
      goal_option_3: 'inks. Padmé jabba mon mace jango organa utapau anakin darth',
      created_by_id: "c67f8f7c-36d3-4d59-b1a0-71458cb291ae",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "1740b6d4-e13d-4ea0-ad17-545bb4bb9546",
      title: "Evidence",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Evidence supports claims null,and is well-chosen",
      rubric_level_2: "Evidence supports claim",
      rubric_level_3: "Evidence does not support claim",
      rubric_level_4: "Limited or no evidence",
      goal_option_1: 'ko mayagil ryn mon wicket maarek fel paploo',
      goal_option_2: 'ando tono. Xappyh nelvaanian nien piett chadra-fan whitesun. Jerjerrod fode caamasi skywalker. Marek doldur palpatine organa. Illum aleena mantell ahsoka a',
      goal_option_3: 'moff depa. Ubese jinn dantooine ka beru dug',
      created_by_id: "b2342765-decb-413f-99ca-8a828bc84048",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "c54305f8-6605-4021-92e5-0a03b4ef22fe",
      title: "Ideas/Content",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Tells a compelling story with a clear sense of purpose",
      rubric_level_2: "Tells a clear story that lacks focus on purpose",
      rubric_level_3: "Ideas are present but largely disconnected null from a central narrative",
      rubric_level_4: "Lacks coherent ideas and sense of purpose",
      goal_option_1: 'wicket maarek fel paploo falleen. Moff mustafar garm devaronian mon. Beru zuggs n',
      goal_option_2: 'ako mayagil ryn mon wicket maarek f',
      goal_option_3: 'ahsoka antilles yuuzhan quadrinaros r4-p17 mod. Thennqora darpa trio',
      created_by_id: "7699e72d-eb33-44d8-81ed-09e7feb76561",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "4659528b-487d-46b5-b4d6-bbc4fcd57c7f",
      title: "Genre",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Chooses a relevant sequence, structure, and designn",
      rubric_level_2: "Shows a more basic understanding of narrative conventions",
      rubric_level_3: "Suitable understanding of some conventions mixed with misunderstanding of others",
      rubric_level_4: "Lacks understanding of narrative conventions",
      goal_option_1: 'anx ka pellaeon bren subterrel. -1b dor fel carondian ric. Gev mirax jawa darth tapani. Duro quelli luuke togruta shistavanen rune.',
      goal_option_2: 'rinaros lars epicanthix. Terrik polis bespin thisspias boz dart',
      goal_option_3: 'Bibble ansion nunb keshiri jango. Charal drovian kyp ozzel freedon thisspiasi',
      created_by_id: "a9da011f-939a-49cb-83a5-90ff8002e1ca",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "98f8e2b6-0252-4d33-b9e3-d11ee333250a",
      title: "Style/Voice",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Well-developed sense pacing, style, and voice",
      rubric_level_2: "Elements of style and voice are present but inconsistent",
      rubric_level_3: "Elements of style or voice are present but don’t support the narrative",
      rubric_level_4: "No clear sense of pacing, style, or voice present",
      goal_option_1: 'dagobah mace ben calrissian dooku k-3po kamino. Mandalore chewbacca jade jar lando yoda lando.',
      goal_option_2: 'a han luuke wedge calamari endor thrawn. Hutt moff lobot wedge mon darth',
      goal_option_3: 'inks. Padmé jabba mon mace jango organa utapau anakin darth',
      created_by_id: "32b5b8c4-5a1d-4c10-95a7-668a5412941f",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "0d674a3e-e61c-41d9-99fb-738882f58f13",
      title: "Word choice",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Keen observation and description of details, and setting",
      rubric_level_2: "Adequate attention to details and setting",
      rubric_level_3: "Limited attention to details and setting",
      rubric_level_4: "Little to no attention to details and setting",
      goal_option_1: 'ko mayagil ryn mon wicket maarek fel paploo',
      goal_option_2: 'ando tono. Xappyh nelvaanian nien piett chadra-fan whitesun. Jerjerrod fode caamasi skywalker. Marek doldur palpatine organa. Illum aleena mantell ahsoka a',
      goal_option_3: 'moff depa. Ubese jinn dantooine ka beru dug',
      created_by_id: "2ac31e44-ea3c-4664-9899-531cb558c58d",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "30a2b72b-153b-449e-ae75-6d52417d5fd8",
      title: "Conclusion",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Clearly evokes the importance of the writers experiences",
      rubric_level_2: "Attempts to convey the importance of  the writers experiences",
      rubric_level_3: "Importance of experiences conveyed does not support the rest of the narrative",
      rubric_level_4: "No clear sense of importance of what has been narrated",
      goal_option_1: 'anx ka pellaeon bren subterrel. -1b dor fel carondian ric. Gev mirax jawa darth tapani. Duro quelli luuke togruta shistavanen rune.',
      goal_option_2: 'rinaros lars epicanthix. Terrik polis bespin thisspias boz dart',
      goal_option_3: 'Bibble ansion nunb keshiri jango. Charal drovian kyp ozzel freedon thisspiasi',
      created_by_id: "2c5e1376-916e-4708-b06d-27fe1878af47",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },


    {
      id: "cff30bcb-0425-4d06-98d3-c22f2bd10a79",
      title: "Issue",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Clearly describes a problem and communicates the nature, scope, and urgency of the problem",
      rubric_level_2: "Describes a specific problem and need for action",
      rubric_level_3: "Does not describe the problem in enough detail:: readers do not see a compelling need for action",
      rubric_level_4: "Does not identify or describe a specific problem",
      goal_option_1: 'ino moff. Padmé obi-wan ben boba hutt mandalore wampa yoda. Cade darth bo',
      goal_option_2: 'walker. Kit r2-d2 solo organa darth skywalker.',
      goal_option_3: 'go mace qui-gon padmé darth gonk. Hutt moff darth sebulba bothan. Han mustafar calamar',
      created_by_id: "2f4abe21-613d-409d-9b4e-bf2368e81d8e",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "37f0de46-357a-442b-9859-fa07fc9e47a9",
      title: "Genre",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Form and language meet the needs of the intended audience",
      rubric_level_2: "Shows a basic understanding of the genres conventions",
      rubric_level_3: "Suitable understanding of some conventions mixed with misunderstanding of others",
      rubric_level_4: "Lacks understanding of the genres conventions",
      goal_option_1: 'anx ka pellaeon bren subterrel. -1b dor fel carondian ric. Gev mirax jawa darth tapani. Duro quelli luuke togruta shistavanen rune.',
      goal_option_2: 'rinaros lars epicanthix. Terrik polis bespin thisspias boz dart',
      goal_option_3: 'Bibble ansion nunb keshiri jango. Charal drovian kyp ozzel freedon thisspiasi',
      created_by_id: "098181df-e26e-425a-9927-b58fcb02f880",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "dd5ee9ca-8c2c-4a81-941a-a3a0d8bb3be2",
      title: "Support",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Incorporate appropriate evidence to convince th,e audience that the solution is feasible",
      rubric_level_2: "Provides adequate support for recommendations",
      rubric_level_3: "Lacking sufficient support for recommendations",
      rubric_level_4: "Limited or no support for recommendations",
      goal_option_1: 'wicket maarek fel paploo falleen. Moff mustafar garm devaronian mon. Beru zuggs n',
      goal_option_2: 'ako mayagil ryn mon wicket maarek f',
      goal_option_3: 'ahsoka antilles yuuzhan quadrinaros r4-p17 mod. Thennqora darpa trio',
      created_by_id: "565d993b-d1a4-4eb9-8e8b-68b0c7151356",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "116e3415-4550-41ba-b976-883d34b844d7",
      title: "Comparisons/Counterarguments",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Examines prior solutions and weighs all reasonable alternatives",
      rubric_level_2: "Adequately describes the history of the issue and mentions alternative solutions",
      rubric_level_3: "Limited attention paid to the issues history or to alternative solutions",
      rubric_level_4: "Little to no attention paid to the issues context or to alternative solutions",
      goal_option_1: 'ko mayagil ryn mon wicket maarek fel paploo',
      goal_option_2: 'ando tono. Xappyh nelvaanian nien piett chadra-fan whitesun. Jerjerrod fode caamasi skywalker. Marek doldur palpatine organa. Illum aleena mantell ahsoka a',
      goal_option_3: 'moff depa. Ubese jinn dantooine ka beru dug',
      created_by_id: "7b193dca-fde5-434a-997c-a5bc4e68b954",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },

    {
      id: "fb620970-3a37-4a2b-ab58-d328d8862117",
      title: "Recommendations",
      description: "desco",
      available_to_rubric: true,
      rubric_level_1: "Makes realistic recommendations and provides a plausible pathway to completion",
      rubric_level_2: "Makes recommendations that need further development",
      rubric_level_3: "Recommendations or approach is somewhat flawed",
      rubric_level_4: "Does not make specific recommendations",
      goal_option_1: 'dagobah mace ben calrissian dooku k-3po kamino. Mandalore chewbacca jade jar lando yoda lando.',
      goal_option_2: 'a han luuke wedge calamari endor thrawn. Hutt moff lobot wedge mon darth',
      goal_option_3: 'inks. Padmé jabba mon mace jango organa utapau anakin darth',
      created_by_id: "db9f0bcc-fdeb-462c-aadb-714ad22e2868",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    }
  ],
  rubric: [
    {
      id: "a3aa7312-68b4-43b9-85b6-fa1f52339a54",
      title: "Analysis",
      description: "moff darth sebulba bothan. Han mustafar calamari qui-gonn. Alderaan solo mon qui-gonn hutt c-3po baba moff. Boba fett moff thrawn darth tatooine dantooine. Windu darth yoda skywalker mara jango windu. Aayla sith wicket darth calamari darth. Skywalker hut",
      created_by_id: "78b02e4a-551c-4ac9-958f-77f658bb8e89",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },
    {
      id: "c8e363e5-7130-4cdb-8ff1-fed2d511efd2",
      title: "Argument",
      description: "ri jinn. Naboo luke dooku mustafar alderaan darth darth organa fett. Fett ben moff solo skywalker binks wicket sith coruscant. Ackbar skywalker coruscant leia hutt mandalore yoda jinn wedge. Jango kamino wookiee leia wedge sidious calrissian skywalker. Organa watto skywalker c-3p0 windu. Mo",
      created_by_id: "83b8b460-73d5-457f-ae97-3ff7d047910b",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },
    {
      id: "c105736c-c330-487c-be74-5a2c983095cc",
      title: "Narrative",
      description: "uscant maul darth mon darth darth. K-3po dantooine jinn dooku fett darth jawa palpatine wedge. Jade organa darth chewbacca ",
      created_by_id: "61ef3973-a29c-48ec-9a38-c4f6e78b1ce4",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    },
    {
      id: "c119e4de-b6e6-4849-9b16-7a8a1e63c7b2",
      title: "Proposal",
      description: "ant. Mace moff fett darth skywalker. Palpatine mon binks hutt darth. Yavin skywalker solo ackbar dooku. Hutt fett jabba yoda. Darth calrissian tusken raider binks kamino moff. Padmé obi-wan ben boba hutt mandalore w",
      created_by_id: "c4534070-359e-4fa4-872d-12e886b3a626",
      created_date: "2017-04-10",
      modified_by_id: null,
      modified_date: null
    }
  ],
  rubric_criteria: [
    {
      rubric_id: 'a3aa7312-68b4-43b9-85b6-fa1f52339a54',
      criteria_id: '4a7e811e-076d-488b-a523-94169c971e6d',
      index: 1
    },
    {
      rubric_id: 'a3aa7312-68b4-43b9-85b6-fa1f52339a54',
      criteria_id: 'bd500741-01d1-4ddc-b08b-dea70d55995f',
      index: 2
    },
    {
      rubric_id: 'a3aa7312-68b4-43b9-85b6-fa1f52339a54',
      criteria_id: '3122600f-1c09-4f2d-bf8e-b6e84bfb6b1f',
      index: 3
    },
    {
      rubric_id: 'a3aa7312-68b4-43b9-85b6-fa1f52339a54',
      criteria_id: '6e6743ea-04fc-449e-8af7-8c368bf5c11c',
      index: 4
    },
    {
      rubric_id: 'a3aa7312-68b4-43b9-85b6-fa1f52339a54',
      criteria_id: '678ef716-4acf-42d2-bef2-583ceb891bfb',
      index: 5
    },
    {
      rubric_id: 'c8e363e5-7130-4cdb-8ff1-fed2d511efd2',
      criteria_id: 'f01ed383-78e9-4089-867a-70e8911bbace',
      index: 1
    },
    {
      rubric_id: 'c8e363e5-7130-4cdb-8ff1-fed2d511efd2',
      criteria_id: '91db94ee-a6f1-4be5-911c-9e7b8b992531',
      index: 2
    },
    {
      rubric_id: 'c8e363e5-7130-4cdb-8ff1-fed2d511efd2',
      criteria_id: '1740b6d4-e13d-4ea0-ad17-545bb4bb9546',
      index: 3
    },
    {
      rubric_id: 'c8e363e5-7130-4cdb-8ff1-fed2d511efd2',
      criteria_id: 'dd6f10e6-f07d-4c70-b5c6-2a3c5e3d35e9',
      index: 4
    },
    {
      rubric_id: 'c8e363e5-7130-4cdb-8ff1-fed2d511efd2',
      criteria_id: '02a8ae4e-2ae3-4390-bcb5-cadb6324567a',
      index: 5
    },
    {
      rubric_id: 'c105736c-c330-487c-be74-5a2c983095cc',
      criteria_id: 'c54305f8-6605-4021-92e5-0a03b4ef22fe',
      index: 1
    },
    {
      rubric_id: 'c105736c-c330-487c-be74-5a2c983095cc',
      criteria_id: '4659528b-487d-46b5-b4d6-bbc4fcd57c7f',
      index: 2
    },
    {
      rubric_id: 'c105736c-c330-487c-be74-5a2c983095cc',
      criteria_id: '98f8e2b6-0252-4d33-b9e3-d11ee333250a',
      index: 3
    },
    {
      rubric_id: 'c105736c-c330-487c-be74-5a2c983095cc',
      criteria_id: '0d674a3e-e61c-41d9-99fb-738882f58f13',
      index: 4
    },
    {
      rubric_id: 'c105736c-c330-487c-be74-5a2c983095cc',
      criteria_id: '30a2b72b-153b-449e-ae75-6d52417d5fd8',
      index: 5
    },
    {
      rubric_id: 'c119e4de-b6e6-4849-9b16-7a8a1e63c7b2',
      criteria_id: 'cff30bcb-0425-4d06-98d3-c22f2bd10a79',
      index: 1
    },
    {
      rubric_id: 'c119e4de-b6e6-4849-9b16-7a8a1e63c7b2',
      criteria_id: '37f0de46-357a-442b-9859-fa07fc9e47a9',
      index: 2
    },
    {
      rubric_id: 'c119e4de-b6e6-4849-9b16-7a8a1e63c7b2',
      criteria_id: 'dd5ee9ca-8c2c-4a81-941a-a3a0d8bb3be2',
      index: 3
    },
    {
      rubric_id: 'c119e4de-b6e6-4849-9b16-7a8a1e63c7b2',
      criteria_id: '116e3415-4550-41ba-b976-883d34b844d7',
      index: 4
    },
    {
      rubric_id: 'c119e4de-b6e6-4849-9b16-7a8a1e63c7b2',
      criteria_id: 'fb620970-3a37-4a2b-ab58-d328d8862117',
      index: 5
    }
  ],
  student_reflection_questions: [
    {
      id: 'a3aa7312-68b4-43b9-85b6-fa1f52339a54',
      question: 'utt ben yavin fett naboo calamari. Obi-wan mon coruscant c',
      question_type: 'free',
      created_by_id: "565d993b-d1a4-4eb9-8e8b-68b0c7151356",
      created_date: "2017-04-10",
    },
    {
      id: 'c8e363e5-7130-4cdb-8ff1-fed2d511efd2',
      question: 'ben boba hutt mandal',
      question_type: 'free',
      created_by_id: "565d993b-d1a4-4eb9-8e8b-68b0c7151356",
      created_date: "2017-04-10",
    },
    {
      id: '823955a1-0a8e-42cc-b24c-cb30afcac93f',
      question: 'a. Mon jango mace q',
      question_type: 'free',
      created_by_id: "565d993b-d1a4-4eb9-8e8b-68b0c7151356",
      created_date: "2017-04-10",
    },
    {
      id: 'c105736c-c330-487c-be74-5a2c983095cc',
      question: 'on kit yoda jinn.',
      question_type: 'fixed',
      created_by_id: "565d993b-d1a4-4eb9-8e8b-68b0c7151356",
      created_date: "2017-04-10",
    },
    {
      id: 'c119e4de-b6e6-4849-9b16-7a8a1e63c7b2',
      question: 'ace moff fisto calamari thrawn. Padmé qui-gon kit',
      question_type: 'fixed',
      created_by_id: "565d993b-d1a4-4eb9-8e8b-68b0c7151356",
      created_date: "2017-04-10",
    }
  ]
};

// activity
// rubric_criteria.criteria_id linked to criteria.id
// can be done with these fixtures, but do we need to now, and is that even a final (or final enough for now) schema?
var options = { showWarning: false};

module.exports = async function() {
  try {
    console.log(`==========loadData=========`);
    await fixtureCreator.create(dataSpec, options);
    console.log(`==========END loadData=========`);
    process.exit()
  }catch(err) {
    console.log(`==========err=========`);
    console.log(err);
    console.log(`==========END err=========`);
    process.exit()
  }
}();
