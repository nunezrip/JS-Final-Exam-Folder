

class Task {
        constructor(owner, description) {
            this.taskOwner = owner;
            this.taskDescription = description;
            this.taskCompleted = true;
            this.taskDate = new Date;
        }
        completionStatus() {
            if (this.completed) {
                this.completed = false;
            } else {
                this.completed = true;
            }
        }
    }
    

    
   
    