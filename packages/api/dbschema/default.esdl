module default {
    scalar type CompletionStatus extending enum<ToDo, Doing, Done>;

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

    type Epic extending DateTime {
        required title: str;
        required description: str;
        points: int;
        required status: CompletionStatus;

        multi stories: UserStory {
            constraint exclusive;
        };
    }

    type UserStory extending DateTime {
        required description: str;
        required user_type: str; # eg user, admin etc
        required action: str;
        required benefit: str;

        points: int;
        required status: CompletionStatus;
        required priority: enum<Low, Medium, High>;
        
        epic := .<stories[is Epic];
    }

    
}
