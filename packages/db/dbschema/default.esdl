module default {

    abstract type DateTime {
        required created: datetime {
            readonly := true;
            rewrite insert using (datetime_of_statement());
        }
        
        required modified: datetime {
            readonly := true;
            rewrite update using (datetime_of_statement());
        }
    }

    type User extending DateTime {
        required firstName: str;
        required lastName: str;
        multi projects: Project;
    }

    type Project extending DateTime {
        required name: str;
        required description: str;

        required user: User;

        multi epics: Epic;
        multi stories: UserStory;

        # TODO: Preferred tech stack

        # TODO: Issues/Bugs

        # TODO: Milestones

        # TODO: Tasks
    }

    scalar type CompletionStatus extending enum<ToDo, Doing, Done>;

    type Epic extending DateTime {
        required title: str;
        required description: str;
        points: int16;
        required status: CompletionStatus;

        multi stories: UserStory {
            constraint exclusive;
        };
    }

    scalar type Priority extending enum<Low, Medium, High>;


    type UserStory extending DateTime {
        required description: str;
        required user_type: str; # eg user, admin etc
        required action: str;
        required benefit: str;

        points: int16;
        required status: CompletionStatus;
        required priority: Priority;
        
        epic := .<stories[is Epic];
    }

    
}
