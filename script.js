document.addEventListener('DOMContentLoaded', () => {
    const moodSelector = document.getElementById('mood-selector');
    const generateBtn = document.getElementById('generate-btn');
    const gitaLineEl = document.getElementById('gita-line');

    const gitaLines = {
        anxious: [
            "Do not be anxious about results. Focus only on your action; results are not in your control. (2.47)",
            "The soul cannot be cut, burned, wetted, or dried; it is indestructible. Why then fear? (2.23)",
            "He who is free from desire and anger, and has subdued the mind, attains peace. (5.26)",
            "A person who is not shaken by sorrow or overjoyed by happiness becomes steady and peaceful. (2.56)",
            "One who is equal in gain and loss, success and failure, is free from anxiety. (2.48)",
            "Those who always think of Me with love, I take care of their needs and remove their burdens. (9.22)",
            "No one who does good ever comes to harm. (6.40)",
            "The mind is restless, but it can be trained by practice and detachment. (6.35)",
            "He who sees Me everywhere and sees everything in Me is never lost, nor am I lost to him. (6.30)",
            "Abandon all anxiety, surrender to Me, and I will protect you. (18.66)"
        ],
        sad: [
            "The soul is never born and never dies; it is eternal. (2.20)",
            "As one changes clothes, so does the soul change bodies. (2.22)",
            "One who is not disturbed by happiness and sorrow is fit for liberation. (2.15)",
            "Do not grieve, for the soul cannot be destroyed. (2.19)",
            "No one who does good work will ever come to a bad end. (6.40)",
            "Even a little practice of this dharma saves one from great fear. (2.40)",
            "My devotee is never lost. (9.31)",
            "The wise see with equal vision a learned man, a cow, an elephant, and a dog. (5.18)",
            "I am the same to all beings; none is hated, none is dear. (9.29)",
            "Abandon all fear and surrender to Me; I will protect you. (18.66)"
        ],
        tired: [
            "Perform your duty, but without attachment to results. (2.47)",
            "Even-mindedness in success and failure is true yoga. (2.48)",
            "One who is disciplined in eating, sleeping, working, and recreation attains yoga. (6.17)",
            "The yogi is greater than the ascetic, the scholar, and the ritualist. (6.46)",
            "Meditation makes the mind steady like a lamp in a windless place. (6.19)",
            "A person who controls the senses and mind remains peaceful. (5.26)",
            "The mind can be the best friend if controlled, or the worst enemy if uncontrolled. (6.6)",
            "For the yogi who is absorbed in Me, I am the ultimate rest. (6.47)",
            "Work performed without selfish motive brings peace. (3.19)",
            "Be fearless, self-controlled, and steady in yoga. (16.1)"
        ],
        confused: [
            "You have the right to action, but never to the fruits of action. Do not be attached to results, nor be inactive. (2.47)",
            "Perform your duty with evenness of mind; success and failure are the same. Such balance is true yoga. (2.48)",
            "Better to do your own duty, even imperfectly, than another’s duty perfectly. (3.35)",
            "Whenever righteousness declines and confusion arises, I manifest Myself to restore dharma. (4.7-8)",
            "Knowledge burns away all confusion, just as fire burns away fuel. (4.37)",
            "The one who has disciplined his mind finds clarity; the undisciplined mind is the enemy. (6.6)",
            "Among thousands, only a few strive for perfection; among those who strive, few truly know Me. (7.3)",
            "I am the source of all; from Me everything proceeds. The wise know this and worship Me. (10.8)",
            "Surrender all confusion to Me; I will guide you and free you from fear. (18.66)",
            "I have revealed to you the most secret wisdom. Reflect deeply on it, then act as you wish. (18.63)"
        ],
        unmotivated: [
            "You have a right to action, not to the fruits of action. (2.47)",
            "Rise up and perform your duty, without fear. (2.37)",
            "It is better to do your own duty, even imperfectly, than another’s duty perfectly. (3.35)",
            "In this path, no effort is ever wasted. (2.40)",
            "One who conquers the mind conquers the world. (6.6)",
            "Whenever righteousness declines, I manifest Myself to restore it. (4.7)",
            "One who is devoted to Me crosses over all obstacles. (7.14)",
            "Even the smallest offering, if given with love, I accept. (9.26)",
            "Those who are steadfast in devotion reach Me without fail. (9.22)",
            "Stand up with determination, and you will find Me with you. (inspired from 18.66)"
        ],
        angry: [
            "From anger comes delusion, from delusion loss of memory, and from memory loss of reason; with reason lost, one is ruined. (2.63)",
            "The self-controlled person, free from anger and desire, attains peace. (5.26)",
            "As a tortoise withdraws its limbs, so can a wise person withdraw the senses. (2.58)",
            "Pleasure comes from contact with senses, but it is temporary and causes suffering. (5.22)",
            "He who restrains the senses and fixes the mind on Me is truly steady. (2.61)",
            "Anger is born of desire; let go of desire, and anger will vanish. (2.62-63)",
            "He who is free from attachment, fear, and anger is dear to Me. (12.13-14)",
            "The peaceful one, free from malice, is beloved by all. (12.15)",
            "One who forgives is strong; one who controls himself is wise. (Gita essence)",
            "Serenity comes to the self-disciplined, not to the angry. (2.64-65)"
        ],
        happy: [
            "A wise person is not attached to joy, yet radiates peace. (2.56)",
            "The yogi rejoices in the Self and is satisfied within. (6.20)",
            "One who sees Me everywhere and everything in Me is never lost. (6.30)",
            "My devotee who loves Me is very dear to Me. (12.14)",
            "Even if one is sinful, if he worships Me with devotion, he is to be regarded as righteous. (9.30)",
            "To those devoted with love, I give the understanding by which they come to Me. (10.10)",
            "With devotion, whatever you do, offer it to Me. (9.27)",
            "Those who worship Me with love, I carry their burdens and preserve what they have. (9.22)",
            "He who is equal in sorrow and joy is dear to Me. (12.18)",
            "The one who loves, forgives, and remains content is blessed. (12.19)"
        ]
    };

    generateBtn.addEventListener('click', () => {
        const selectedMood = moodSelector.value;
        const linesForMood = gitaLines[selectedMood];

        if (linesForMood && linesForMood.length > 0) {
            const randomIndex = Math.floor(Math.random() * linesForMood.length);
            const selectedLine = linesForMood[randomIndex];
            gitaLineEl.textContent = selectedLine;
        } else {
            gitaLineEl.textContent = "Please select a valid mood to get a message.";
        }
    });
});
