import { App } from './App';

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    App.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default App;
