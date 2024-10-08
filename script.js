
        // Sleep function to simulate time.sleep() in Python
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Dichotomy method with dynamic function
        async function dichotomie(a, b, l, i, f, sleepDuration, func) {
            document.getElementById("output").innerHTML += `L'amplitude de l'intervalle ${i}${a} , ${b}${f} est :<br>`;
            await sleep(sleepDuration);
            document.getElementById("output").innerHTML += `${a} - ${b} = ${a - b}<br>`;
            await sleep(sleepDuration);

            if (b - a <= l) {
                document.getElementById("output").innerHTML += `${b - a} < ${l} alors :<br>`;
                await sleep(sleepDuration);
                return `${a} < α < ${b}`;
            } else {
                document.getElementById("output").innerHTML += `${b - a} > ${l} alors calculons le centre de l'intervalle ${i}${a} , ${b}${f}:<br>`;
                await sleep(sleepDuration);
                let centre = (a + b) / 2;
                document.getElementById("output").innerHTML += `On a (${a} + ${b}) / 2 = ${centre}<br>`;
                await sleep(sleepDuration);
                let isPositive = func(a) * func(centre) > 0;
                document.getElementById("output").innerHTML += `Et on a f(${a}) = ${func(a)} et f(${centre}) = ${func(centre)}<br>`;
                await sleep(sleepDuration);

                if (!isPositive) {
                    document.getElementById("output").innerHTML += `Et puisque la valeur de f(${a}) * f(${centre}) = ${func(a) * func(centre)} < 0<br>`;
                    await sleep(sleepDuration);
                    document.getElementById("output").innerHTML += `L'intervalle est ${a} < α < ${centre}<br>`;
                    return dichotomie(a, centre, l, i, f, sleepDuration, func);
                } else {
                    document.getElementById("output").innerHTML += `Et puisque la valeur de f(${a}) * f(${centre}) = ${func(a) * func(centre)} > 0<br>`;
                    await sleep(sleepDuration);
                    document.getElementById("output").innerHTML += `L'intervalle est ${centre} < α < ${b}<br>`;
                    return dichotomie(centre, b, l, i, f, sleepDuration, func);
                }
            }
        }

        // Function to start the process with input values and dynamic function
        async function startDichotomie() {
            // Get input values
            let a = parseFloat(document.getElementById("inputA").value);
            let b = parseFloat(document.getElementById("inputB").value);
            let l = parseFloat(document.getElementById("inputL").value);
            let sleepDuration = parseInt(document.getElementById("sleepDuration").value);

            let functionStr = document.getElementById("functionInput").value;

            // Convert function input string to a usable function
            let func = new Function('x', `return ${functionStr};`);

            // Clear previous output
            document.getElementById("output").innerHTML = "";

            // Call the dichotomie function with inputs
            let result = await dichotomie(a, b, l, ']', '[', sleepDuration, func);
            document.getElementById("output").innerHTML += `<strong>Result: ${result}</strong><br>`;
        }
    