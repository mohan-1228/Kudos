
import  Button from '~/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-black mb-4">Welcome to Remix</h1>
        <p className="text-xl text-black mb-8">Craft powerful web applications with ease</p>
        <Button className="bg-blue-500 text-purple-900 hover:bg-purple-500 transition-colors duration-300">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;