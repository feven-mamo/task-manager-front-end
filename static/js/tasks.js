$(function () {
    var rootUrl = "http://localhost:8080/task-manager/";
    fetchTasks();
    function fetchTasks() {
        $.ajax({
            url: rootUrl + "TaskServlet",
            crossDomain: true,
            type: "get",
            dataType: "json",
            success: populateTasks,
            error: function (error) { console.log("Failed to fetch tasks", error) }

        });
    }
    function populateTasks(tasks) {

        $.each(tasks, function (index, task) {
            createTask(task);
        });

    }
    function createTask(task) {
        var li = $("<li>").addClass("task");
        var id = $("<span>").addClass("id").text(task.id);
        var title = $("<span>").addClass("title").text(task.title);
        var description = $("<span>").addClass("description").text(task.description);
        $(li).append(id).append(title).append(description);
        $("#tasks").append(li);
    }
})