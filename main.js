



const select = document.getElementById('category-select3');

for (let age = 5; age <= 100; age += 5) {
    const option = document.createElement('option');
    option.value = age;
    option.textContent = age;
    select.appendChild(option);

}

const select5 = document.getElementById('category-select5');

for (let height = 120; height <= 220; height += 5) {
    const opt = document.createElement('option');
    opt.value = height;
    opt.textContent = height + ' cm';
    select5.appendChild(opt);
}


const select6 = document.getElementById('category-select6');

for (let weight = 20; weight <= 140; weight += 5) {
    const opt = document.createElement('option');
    opt.value = weight;
    opt.textContent = weight + ' kg';
    select6.appendChild(opt);
}

const container = document.getElementById('buttonContainer');
const buttons = [
    { id: 'camera', label: 'make picture' },
    { id: 'photo', label: 'download photo' },
    { id: 'pencil', label: 'correct' },
    { id: 'arrow', label: 'add form' }
];

buttons.forEach(btn => {
    container.innerHTML += `
        <button id="${btn.id}Id" aria-label="${btn.label}">
            <img src="pics/${btn.id}.png" alt="" width="20" height="20">
        </button>`;
});



// ----------------------------

// function calculateDiet() {
//
//     const weight = parseFloat(document.getElementById('category-select6')?.value) || 0;
//     const height = parseFloat(document.getElementById('category-select5')?.value) || 0;
//     const age = parseFloat(document.getElementById('category-select3')?.value) || 0;
//     const gender = document.getElementById('category-select1')?.value;
//
//     if (weight > 0 && height > 0 && age > 0) {
//         let bmr = (10 * weight) + (6.25 * height) - (5 * age);
//         bmr = (gender === 'langRu') ? bmr - 161 : bmr + 5;
//         const tdee = Math.round(bmr * 1.2);
//
// // 3. Calculating Protein, Fat, and Carbohydrates (Protein 30%, Fat 30%, Carbohydrates 40%)
//         const p = Math.round((tdee * 0.3) / 4);
//         const f = Math.round((tdee * 0.3) / 9);
//         const c = Math.round((tdee * 0.4) / 4);
//
//         const resBox = document.getElementById('result-box');
//         resBox.style.display = 'block';
//         document.getElementById('calories-val').innerText = `${tdee} kcal`;
//         document.getElementById('macros').innerText = `Protein: ${p}g | Fat: ${f}g | Carbohydrates: ${c}g`;
//     }
// }
//
//
// document.querySelectorAll('select').forEach(select => {
//     select.addEventListener('change', calculateDiet);
// });

const trackDietWithGemini = async (userFoodInput) => {
    const url = 'https://Italord1.pythonanywhere.com/api/direct';


    const payload = {
        "parts": [
            { "text": `User diet entry: ${userFoodInput}. Please analyze or log this.` }
        ],
        "model_name": "gemini-2.5-flash"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Gemini Diet Tracker Response:', result);
        return result;

    } catch (error) {
        console.error('Failed to send diet data:', error);
    }
};


trackDietWithGemini("Сегодня на завтрак была овсянка с медом и кофе");