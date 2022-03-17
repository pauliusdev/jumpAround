const exercise = {
    duration: "01:00",
    bodyArea: "Legs",
    name: "Squats",
    exerciseStatus: false,
    startExercise: function(exerciseStatus) {
        this.exerciseStatus;
    },
    requireMindAge: 16,
    requiredMaxAge: 70 
}

const markup = (exercise) => {
    return `
    <div>
        <h4>${exercise.name}</h4>
        <ul>
            <li>
                ${exercise.exerciseStatus ? "STARTED" : "STOPED"}
            </li>
            <li>
                ${exercise.duration}
            </li>
            <li>
                ${exercise.bodyArea}
            </li>
            <li>
                ${exercise.requireMindAge}
            </li>
            <li>
                ${exercise.requiredMaxAge}
            </li>
        </ul>
    `
};


const main  = document.createElement("main");
main.innerHTML = markup(exercise);
document.bodyArea.appendChild(main)

