
import { Mail, Phone, Youtube, Printer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WebCV = () => {
  const { toast } = useToast();
  const personalInfo = {
    name: "Amar Singh",
    phone: "+91 9910229366",
    email: "gameb30232@gmail.com",
    youtube: "https://www.youtube.com/@game-effecthouse"
  };

  const stats = [
    { label: "Views", value: "6.8M+" },
    { label: "Filter Tries", value: "237K+" },
    { label: "Likes", value: "178K+" },
    { label: "Revenue", value: "$640+" }
  ];

  const handlePrint = () => {
    toast({
      title: "Preparing to print...",
      description: "Your CV will open in the print dialog shortly.",
    });
    window.print();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 space-y-6 print:p-0 print:shadow-none">
        {/* Print Button - Hidden when printing */}
        <div className="flex justify-end print:hidden">
          <Button 
            onClick={handlePrint}
            className="hover:bg-gray-100 transition-colors"
            variant="outline"
          >
            <Printer className="mr-2 h-4 w-4" />
            Print CV
          </Button>
        </div>

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{personalInfo.name}</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 text-gray-600 hover:text-gray-900 print:text-black">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 text-gray-600 hover:text-gray-900 print:text-black">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </a>
            <a href={personalInfo.youtube} className="flex items-center gap-1 text-gray-600 hover:text-gray-900 print:text-black">
              <Youtube className="h-4 w-4" />
              <span className="print:after:content-[attr(href)] print:after:ml-1">YouTube</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center print:border-0 print:shadow-none">
              <CardHeader className="pb-2 print:pb-1">
                <CardTitle className="text-2xl md:text-3xl font-bold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 print:text-gray-800">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Section */}
        <Card className="print:border-0 print:shadow-none">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 print:text-black">
              Highly creative and results-driven individual with a passion for online education and engaging digital experiences. 
              Proven ability to captivate and educate a massive online audience, evidenced by over 6.8 million views, Top 1% Creator 
              status on the TikTok Effect House platform, and $640+ in revenue from digital product sales.
            </p>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="print:border-0 print:shadow-none">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Online Content Creator & Digital Educator</h3>
              <p className="text-gray-600 print:text-gray-800">TikTok Effect House & YouTube | July 2021 - Present</p>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-2">
                  <span className="text-gray-700 print:text-black">•</span>
                  <span>Designed and launched highly successful AR filters for TikTok using Effect House, achieving over 6.8M views.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-700 print:text-black">•</span>
                  <span>Generated $640+ in revenue from 50+ sales of digital products through platforms like Gumroad.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">Minecraft Community Leader & Server Administrator</h3>
              <p className="text-gray-600 print:text-gray-800">TsukimiDayfuku Minecraft Server | July 2023 - Present</p>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-2">
                  <span className="text-gray-700 print:text-black">•</span>
                  <span>Managed an active Minecraft server community of 10+ regular members.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-700 print:text-black">•</span>
                  <span>Provided guidance and mentorship to players of diverse linguistic backgrounds.</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="print:border-0 print:shadow-none">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Digital Content Creation</h4>
                <p className="text-gray-700 print:text-black">Expertise in creating viral digital content, online tutorials, and instruction.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">TikTok Effect House</h4>
                <p className="text-gray-700 print:text-black">Proficient in AR filter design and development.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Minecraft Expertise</h4>
                <p className="text-gray-700 print:text-black">Server management, building, and community engagement.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Technical Skills</h4>
                <p className="text-gray-700 print:text-black">Effect House, YouTube, Gumroad, Discord, Server Administration.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="print:border-0 print:shadow-none">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold">Ryan International School Faridabad</h3>
            <p className="text-gray-600 print:text-gray-800">Completed 12th Grade | 2015</p>
            <p className="mt-2 text-gray-700 print:text-black">Achieved high grades in 12th grade, demonstrating a strong academic foundation.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default WebCV;
