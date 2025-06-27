async function fetchData(url) {
    try {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));

            const errorMessage = errorData.message || response.statusText || 'Unknown error occurred.';
            throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();

        console.log(`Data successfully fetched from ${url}:`, data);

        return data;

    } catch (error) {

        console.error('An error occurred during data fetching:', error);

        throw error;
    }
}
