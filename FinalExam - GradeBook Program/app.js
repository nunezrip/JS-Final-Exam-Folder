

class Student {
        constructor(studentFirstName, studentLastName, studentId) {
            this.studentFirstName = studentFirstName;
            this.studentLastName = studentLastName;
            this.studentId = studentId;
        }
    }
    
    class Assignment {
       constructor(studentId, url, type, grade) {
            this.studentId = studentId;
            this.url = url;
            this.type = type;
            this.grade = grade;
       }
    }
    
    class Gradebook {
        constructor(courseCode, courseId, instructorName) {
            this.courseCode = courseCode;
            this.courseId = courseId;
            this.instructorName = instructorName;
    // creating empty array
            this.assignments = [];
        }
    // Pushing values to array (studentId, url, type, grade)
        addAssignment(assignment) {
            this.assignments.push(assignment);
        }
       
        getAverage() {
    // creating empty array, pushing grades, calculating score
             const scores = [];
            this.assignments.map(function(score) {
                scores.push(score.grade);
            });
            
                const total = scores.reduce(function(acc, curr) {
                return acc + curr;
           
             });
            
            return Math.round(((total / scores.length) *100) / 100)
        }
    }
    
    const assignment1 = new Assignment(150, 'http://school.com', 'assignment', 75);
    const assignment2 = new Assignment(300, 'http://school.com', 'assignment', 98);
    const assignment3 = new Assignment(450, 'http://school.com', 'assignment',84);
    
    const grades1 = new Gradebook(555, 222, 'jose');
        grades1.addAssignment(assignment1);
        grades1.addAssignment(assignment2);
        grades1.addAssignment(assignment3);
    
    console.log(grades1.assignments)
    console.log(grades1.getAverage());
    
    