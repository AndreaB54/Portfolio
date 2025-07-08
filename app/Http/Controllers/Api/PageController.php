<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class PageController extends Controller
{
    // Menampilkan halaman utama
    public function index()
    {
        // Hanya menampilkan view, tanpa data
        return view('pages.home.index');
    }

    // Menyiapkan data untuk halaman utama
    public function getHomeData()
    {
        $data = [
            // Data untuk Hero Section
            'name' => 'Andrea Marie Baikole',
            'title' => "A TECH LEARNER",
            'description' => 'Still learning. Still building. This portfolio is my journey in motion.',
            'socials' => [
                'mail' => 'mailto:andrea.baikole@gmail.com',
                'instagram' => 'https://instagram.com/andrea_baikole',
                'linkedin' => 'https://www.linkedin.com/in/andrea-marie-baikole/',
                'github' => 'https://github.com/AndreaB54'
            ],
    
            // Data untuk About Section
            'about' => [
                'greeting' => 'It All Started with Curiosity...',
                'image_path' => '/images/foto2.png',
                'cv_path' => '/dokumen/Network-Engineer-CV.pdf',

                'paragraphs' => [
                    'A simple question — *"How does this work?"* — was the spark that ignited a long journey.',
                    'A journey of digging deeper, learning endlessly, and turning curiosity into something real and meaningful.',
                    'That curiosity led me to explore the world of computer networks, where I later became a **Teaching Assistant** for various networking courses — from basic infrastructure to enterprise systems.',
                    'Along the way, I joined the **Bangkit Academy**, where I deepened my knowledge of cloud computing and learned to build backend application for our capstone project called **WasteWise**. I also had the opportunity to collaborate with friends on various projects that span websites, mobile apps, and even desktop applications.',
                    'Through each step, I’ve discovered that curiosity grows when shared — and this portfolio is my way of sharing that growth with you.'
                ],

                // KEY STATISTICS (for highlight cards)
                'stats' => [
                    ['number' => '7', 'label' => 'Current Semester'],
                    ['number' => '3', 'label' => 'Courses Assisted'],
                    ['number' => '5+', 'label' => 'Tech Explored']
                ],

                // PENDIDIKAN (diubah menjadi array of objects)
                'education' => [
                    [
                        'institution' => 'Universitas Kristen Duta Wacana',
                        'major' => 'Informatika',
                        'period' => '2022 - Now'
                    ],
                    [
                        'institution' => 'Bangkit Academy',
                        'major' => 'Cloud Computing Cohort - Batch 2',
                        'period' => '2024'
                    ]
                ],

                // SKILLS 
                'skills' => [
                    [
                        'category' => 'Web Development',
                        'technologies' => [
                            'HTML', 
                            'CSS', 
                            'JavaScript', 
                            'PHP', 
                            'Python'
                        ]
                    ],
                    [
                        'category' => 'Framework & Library',
                        'technologies' => [
                            'Laravel', 
                            'React.js', 
                            'Node.js'
                        ]
                    ],
                    [
                        'category' => 'Application & General Purpose',
                        'technologies' => [
                            'Java', 
                            'Kotlin', 
                            'C++', 
                            'Visual Basic .NET'
                        ]
                    ],
                    [
                        'category' => 'Network Engineering',
                        'technologies' => [
                            'Cisco Packet Tracer',
                            'Wireshark',
                            'Subnetting',
                            'Routing & Switching',
                            'OSI & TCP/IP Models',
                            'Network Troubleshooting'
                        ]
                    ],
                    [
                        'category' => 'Languages',
                        'technologies' => ['Indonesia', 'English']
                    ]
                ],

                // KETERTARIKAN PRIBADI
                'interests' => ['Web Development', 'Android Development', 'Desktop Application Development', 'Cloud Computing', 'Cybersecurity', 'Internet of Things', 'Network Engineering'],
                
                // TOOLS
                'tools' => ['VS Code', 'Visual Studio 2022', 'GitHub', 'Wireshark', 'Winbox', 'Android Studio', 'XAMPP', 'Firebase Console']
            ],

            // Data buat Projects Section
            'projects' => [
                'title' => 'My Recent Works',
                'description' => 'Here are some of the projects I’ve worked on, showcasing how I’ve applied my skills and explored various technologies.',
                'project_list' => [
                    [
                        'title' => 'WasteWise Application',
                        'category' => 'Backend API & Cloud Environment',
                        'image_path' => '/projects/wastewise.png', 
                        'link' => 'https://github.com/BangkitTeam/WasteWise-CC' 
                    ],
                    [
                        'title' => 'Portfolio Website',
                        'category' => 'Full-Stack Development',
                        'image_path' => '/projects/portfolio.png',
                        'link' => '#'
                    ],
                    [
                        'title' => 'LaundryGo',
                        'category' => 'Mobile Development',
                        'image_path' => '/projects/laundrygo.jpg',
                        'link' => 'https://github.com/frederiksamra/UAS-Pemrograman-Android'
                    ],
                    [
                        'title' => 'Readnest - Personal Library',
                        'category' => 'Desktop Application',
                        'image_path' => '/projects/readnest.png',
                        'link' => 'https://drive.google.com/drive/u/1/folders/1Mp1qWXiNpcnIqCjD-TAuXfejW3Wv23z-'
                    ],
                ]
                ],
            
            // Data buat Contact Section
            'contact' => [
                'title' => 'Get in Touch',
                'description' => 'Have a project in mind or just want to say hello? Feel free to reach out. I\'m always open to discussing new ideas and opportunities.',
                'availability' => 'Monday to Friday, 17:00 - 21:00 WIB',
                'location' => 'Yogyakarta, Indonesia',
                'email' => 'andrea.baikole@gmail.com',
                'phone' => '+62 123 4567 890'
            ]
        ];

        return response()->json($data);
    }
}