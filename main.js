song_garmi = "";
song_kesariya = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
leftWristScore = 0;
rightWristScore = 0;
songStatus = "";

function setup() {
    canvas = createCanvas(550, 430);
    canvas.position(550, 250);
    // canvas.center();
    video = createCapture(550, 430);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded !!!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristScore = results[0].pose.keypoints[9].score;
        rightWristScore = results[0].pose.keypoints[10].score;
        console.log("Left Wrist Score = " + leftWristScore);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + left_wrist_x + "Left Wrist Y = " + left_wrist_y);

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + right_wrist_x + "Right Wrist Y = " + right_wrist_y);
    }
}

function preload() {
    song_garmi = loadSound("Garmi.mp3");
    song_kesariya = loadSound("Kesariya.mp3");
}

function draw() {
    image(video, 0, 0, 550, 430);

    fill("red");
    stroke("red");

    if (leftWristScore > 0.2) {
        circle(left_wrist_x, left_wrist_y, 50);
        song_kesariya.isPlaying(false);
        if (song_garmi == false) {
            song_garmi.isPlaying(true);
            document.getElementById("song_name").innerHTML = "Song Playing = " + song_garmi;
        }
    }

    if (rightWristScore > 0.2) {
        circle(right_wrist_x, right_wrist_y, 50);
        song_garmi.isPlaying(false);
        if (song_kesariya == false) {
            song_kesariya.isPlaying(true);
            document.getElementById("song_name").innerHTML = "Song Playing = " + song_kesariya;
        }
    }
}