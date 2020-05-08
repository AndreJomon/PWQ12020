"use strict";

const STORAGE_KEY = "toDoObjects";

// let toDoObjects = [
//     {
//         "description" : "Ir no supermercado",
//         "tags": ["shopping", "chores"]
//     },
//     {
//         "description" : "Fazer novos todos",
//         "tags": ["organization", "work"]
//     },
//     {
//         "description" : "Assistir a aula de segunda",
//         "tags": ["study", "university"]
//     },
//     {
//         "description" : "Responder emails",
//         "tags": ["work"]
//     },
//     {
//         "description" : "Levar o cachorro para pessear",
//         "tags": ["pets", "chores"]
//     },
//     {
//         "description" : "Terminar de escrever o relatório",
//         "tags": ["writing", "work"]
//     }
// ];

function deleteEntry(entry) {
    let target = entry.target;
    if (target.tagName == "LI") {
        let toDoObjects = getToDoObjects();
        for (let i = 0; i <= toDoObjects.length-1; i++) {
            if (toDoObjects[i].description == target.innerHTML) {
                toDoObjects.splice(i, 1);
                save(toDoObjects);
            }
        }
        target.remove();
    }
}

function populateNewest() {
    let $content = $("<ul>");
    let toDos = formatToDos();

    for (let i = toDos.length -1; i >= 0; i--) {
        $content.append($("<li>").text(toDos[i]));
    }

    $content.on("click", function(e){
        deleteEntry(e);
    });

    return $content;
}

function populateOldest() {
    let $content = $("<ul>");
    let toDos = formatToDos();

    for (let i = 0; i < toDos.length; i++) {
        $content.append($("<li>").text(toDos[i]));
    }

    $content.on("click", function(e){
        deleteEntry(e);
    });

    return $content;
}

function populateGroupedByTags() {
    let toDoObjects = getToDoObjects();
    let differentTags = getDifferentTags(toDoObjects);
    let $content = $("<ul>");
    $content.on("click", function(e){
        deleteEntry(e);
    });
    differentTags.forEach(tag => {
        let $tagTitle = $("<li>").addClass("tag-title").text(tag);
        $content.append($tagTitle);
        getDescriptionWithTag(toDoObjects, tag).forEach(description =>{
            let $description = $("<li>").addClass("tag-description").text(description);
            $content.append($description)
        });
    });

    return($content);
}

function getDescriptionWithTag(toDoObjects, tag) {
    let descriptions = []
    toDoObjects.forEach(object => {
        if (object.tags.includes(tag)){
            descriptions.push(object.description);
        }
    });
    return descriptions;
}

function getDifferentTags(toDoObjects) {
    let diffTags = [];
    toDoObjects.forEach(object => {
        object.tags.forEach(tag => {
            if (!diffTags.includes(tag)){
                diffTags.push(tag);
            } 
        });           
    });
    return diffTags;
}

function populateAdd() {

    let $inputTitle = $("<input>").attr("id", "tag-title").addClass("description"),
        $inputLabel = $("<label>").attr("for", "tag-title").text("Description: "),
        $tagInput = $("<input>").attr("id", "tag-input").addClass("tags"),
        $tagLabel = $("<label>").attr("for", "tag-input").text("Tags: "),
        $button = $("<button>").text("+");

        $button.on("click", function() {
            let description = $inputTitle.val(),
                tags = $tagInput.val().replace(/\s+/g, '').split(",");
            let toDoObjects = getToDoObjects();

            toDoObjects.push({
                "description": description,
                "tags": tags
            });
            save(toDoObjects);
            $inputTitle.val("");
            $tagInput.val("");  
        });

        return $("<div>").append($inputLabel)
                        .append($inputTitle)
                        .append($tagLabel)
                        .append($tagInput)
                        .append($button);

}

function getToDoObjects() {
    let toDoObjects = localStorage.getItem(STORAGE_KEY);

    if (toDoObjects == null)
        return [];

    return JSON.parse(toDoObjects);
}

function save(toDoObjects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDoObjects));
}

function formatToDos() {
    return getToDoObjects().map(function(todo) {
        return todo.description;
    });
}

$(function() {
    $(".tabs a span").on("click", function() {
        $(".tabs a span").removeClass("active");
        $(this).addClass("active");
        $("main .content").empty();

        let $content;

        if ($(this).is("#newest")) {
            $content = populateNewest();
        } else if ($(this).is("#oldest")) {
            $content = populateOldest();
        }
        else if ($(this).is("#tags")) {
            $content = populateGroupedByTags();
        } else if ($(this).is("#add")) {
            $content = populateAdd();
        }

        $("main .content").append($content);

        return false;
    });

    $("#newest").trigger("click");
});