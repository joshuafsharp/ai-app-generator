CREATE MIGRATION m1j5xw5oferjs2sal5yjocacc6bwt3dzx5czi63y5wdvcztqemqr7q
    ONTO initial
{
  CREATE ABSTRACT TYPE default::DateTime {
      CREATE REQUIRED PROPERTY created: std::datetime {
          SET readonly := true;
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY modified: std::datetime {
          SET readonly := true;
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
  };
  CREATE SCALAR TYPE default::CompletionStatus EXTENDING enum<ToDo, Doing, Done>;
  CREATE TYPE default::Epic EXTENDING default::DateTime {
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE PROPERTY points: std::int16;
      CREATE REQUIRED PROPERTY status: default::CompletionStatus;
      CREATE REQUIRED PROPERTY title: std::str;
  };
  CREATE TYPE default::Project EXTENDING default::DateTime {
      CREATE MULTI LINK epics: default::Epic;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::User EXTENDING default::DateTime {
      CREATE MULTI LINK projects: default::Project;
      CREATE REQUIRED PROPERTY firstName: std::str;
      CREATE REQUIRED PROPERTY lastName: std::str;
  };
  CREATE SCALAR TYPE default::Priority EXTENDING enum<Low, Medium, High>;
  CREATE TYPE default::UserStory EXTENDING default::DateTime {
      CREATE REQUIRED PROPERTY action: std::str;
      CREATE REQUIRED PROPERTY benefit: std::str;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE PROPERTY points: std::int16;
      CREATE REQUIRED PROPERTY priority: default::Priority;
      CREATE REQUIRED PROPERTY status: default::CompletionStatus;
      CREATE REQUIRED PROPERTY user_type: std::str;
  };
  ALTER TYPE default::Epic {
      CREATE MULTI LINK stories: default::UserStory {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::UserStory {
      CREATE LINK epic := (.<stories[IS default::Epic]);
  };
  ALTER TYPE default::Project {
      CREATE MULTI LINK stories: default::UserStory;
      CREATE REQUIRED LINK user: default::User;
  };
};
