<!-- <script>
    async function handlesubmit(event) {
        event.preventDefault(); 
        const form = event.target;
        const data = new FormData(form);

    
        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }
    }

    let loading = false;
</script>

<form method="POST" action="/" on:submit|preventDefault={handlesubmit}>
    <label for="name">Enter your name:</label>
    <br>
    <input type="text" placeholder="Enter your name" name="name">
    <br>

    <label for="age">Enter your age:</label>
    <br>
    <input type="number" placeholder="Enter your age" name="age">
    <br>

    <label for="email">Enter your email:</label>
    <br>
    <input type="email" placeholder="Enter your email" name="email">
    <br>

    <button class="bg-gray-400 text-black" type="submit">Submit</button>
</form> -->





<script>
	import { enhance } from "$app/forms";
    let loading = false;
</script>

<form method="POST" use:enhance class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
    <h2 class="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>

    <div>
        <label for="name" class="block text-gray-600 mb-2">Enter your name:</label>
        <input type="text" placeholder="Enter your name" name="name" required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
        <label for="age" class="block text-gray-600 mb-2">Enter your age:</label>
        <input type="number" placeholder="Enter your age" name="age" required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
        <label for="email" class="block text-gray-600 mb-2">Enter your email:</label>
        <input type="email" placeholder="Enter your email" name="email" required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <button type="submit" 
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition-colors duration-300">
       submit
    </button>
</form>

