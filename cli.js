#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import ora from "ora";

// Configure gradients
const bannerGradient = gradient.cristal;
const menuGradient = gradient.retro;
const highlight = gradient.atlas;

// ASCII Art Banner
const showBanner = () => {
  console.log(
    bannerGradient.multiline(
      figlet.textSync("MD ASHRAFUL ALAM", {
        font: "ANSI Shadow",
        horizontalLayout: "full",
      })
    )
  );

  console.log(
    boxen(
      highlight("⚡ Terminal CLI Portfolio  •  v2.0.0"),
      {
        padding: 1,
        borderStyle: 'round',
        borderColor: '#FF7F50',
        margin: { top: 2, bottom: 2 }
      }
    )
  );
};

// Animated divider
const createDivider = () => {
  console.log(gradient.mind('━'.repeat(process.stdout.columns || 40)));
};

// Main Menu
const mainMenu = async () => {
  createDivider();
  const { command } = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: menuGradient("Explore Portfolio:"),
      choices: [
        { name: highlight("✨ About Me"), value: "about" },
        { name: gradient.fruit("🚀 Projects"), value: "projects" },
        { name: gradient.passion("🛠 Tech Stack"), value: "skills" },
        { name: gradient.teen("📬 Contact Links"), value: "contact" },
        { name: gradient.mind("❌ Exit Session"), value: "exit" },
      ],
      loop: false
    }
  ]);

  await handleCommand(command);
};

// Command Handler
const handleCommand = async ( command ) =>
{
    const spinner = ora( { spinner: 'dots', color: 'cyan' } ).start();
    await new Promise( resolve => setTimeout( resolve, 800 ) );
    spinner.stop();

    switch ( command )
    {
        case "about":
            console.log(
                boxen(
                    gradient.morning( `
          ${( "👨💻 About Ashraful:" )}
          
          ${( "Full-stack Developer & Tech Enthusiast" )}
          ${( "🔭 Specializing in:" )}
          • AI/ML Integration
          • Cloud-Native Solutions
          • Cybersecurity Systems
          
          ${( "🌟 Current Focus:" )}
          Building serverless architectures with Rust & WebAssembly
          `),
                    {
                        padding: 1,
                        borderColor: '#4ECDC4',
                        borderStyle: 'round',
                        margin: { top: 1, bottom: 1 }
                    }
                )
            );
            break;

        case "projects":
            await showProjects();
            return;

        case "skills":
            console.log(
                boxen(
                    gradient.rainbow( `
          ${( "🛠 Core Stack:" )}
          ┌──────────────────────┬──────────────────────┐
          │ ${( "Frontend" )}           │ ${( "Backend" )}            │
          ├──────────────────────┼──────────────────────┤
          │ • Next.js            │ • Node.js            │
          │ • React              │ • Rust               │
          │ • Javascript         │ • GraphQL            │
          └──────────────────────┴──────────────────────┘
          
          ${"🔧 Dev Tools:"}
          • Docker • Kubernetes • AWS • Vercel
          `),
                    { borderColor: '#6C5CE7', padding: 1 }
                )
            );
            break;

        case "contact":
            console.log(
                boxen(
                    gradient.pastel( `
          ${( "📬 Connect with Me:" )}
          
          ${( '🌐 Portfolio Site :' )} ${'https://muhamash-portfolio.vercel.app'}
          ${( '💼 LinkedIn Profile :' )} ${'https://linkedin.com/in/md-ashraful-alam'}
          ${( '🕹️ GitHub Projects :' )} ${'https://github.com/muhamash'}
          ${( '📧 Professional Email :' )} ${'mailto:muhammad-ashraful@outlook.com'}
    `,
                    ),
                    {
                        borderStyle: 'classic',
                        borderColor: '#FF9F43',
                        padding: 1,
                        margin: { top: 1 }
                    }
                )
            );
            break;

        case "exit":
            console.log(
                boxen(
                    chalk.bold.hex( '#FF6B6B' )( '🚀 Thanks for visiting! Keep coding amazing things!' ),
                    { padding: 1, borderColor: '#4ECDC4' }
                )
            );
            process.exit( 0 );
    }

    setTimeout( mainMenu, 1000 );
};

// Project Section
const showProjects = async () =>
{
    const { project } = await inquirer.prompt( [
        {
            type: "list",
            name: "project",
            message: gradient.rainbow( "Select Project for Deep Dive:" ),
            choices: [
                { name: chalk.inverse( '🛡 Swachchhota Platform' ), value: 'antiCorruption' },
                { name: chalk.inverse( '🧠 AI Learning Hub' ), value: 'aiHub' },
                { name: chalk.inverse( '☁️ Cloud ATS System' ), value: 'ats' },
                { name: chalk.hex( '#FF6B6B' )( '🔙 Return to Main Menu' ), value: 'back' }
            ]
        }
    ] );

    if ( project === 'back' ) return mainMenu();

    const projectDetails = {
        antiCorruption: {
            title: gradient.cristal( '🛡 Swachchhota Platform' ),
            content: boxen(
                chalk.hex( '#4ECDC4' )( `
      ${chalk.bold.hex( '#FF6B6B' )( 'Anti-Corruption Reporting System' )}
      
      • Real-time case tracking with Mapbox integration
      • End-to-end encrypted reporting system
      • Multi-language support & analytics dashboard
      ${chalk.hex( '#6C5CE7' )( 'Tech: Next.js 14, TRPC, Prisma, Redis' )}
      `),
                { borderColor: '#FF9F43', padding: 1 }
            )
        },
        aiHub: {
            title: gradient.cristal( '🧠 AI Learning Hub' ),
            content: boxen(
                chalk.hex( '#6C5CE7' )( `
      ${chalk.bold.hex( '#4ECDC4' )( 'Adaptive Learning Platform' )}
      
      • GPT-4 powered code assessment
      • Personalized learning paths
      • Real-time collaboration features
      ${chalk.hex( '#FF9F43' )( 'Tech: Python, TensorFlow, WebSockets' )}
      `),
                { borderColor: '#4ECDC4', padding: 1 }
            )
        },
        ats: { 
            title: gradient.cristal( '☁️ Cloud ATS System' ),
            content: boxen(
                chalk.hex( '#FFD700' )( `
      ${chalk.bold.hex( '#4ECDC4' )( 'Automated CV Analysis & ATS' )}

      • AI-driven resume screening
      • Candidate ranking system
      • Integration with HR platforms
      ${chalk.hex( '#FF9F43' )( 'Tech: Next.js, FastAPI, PostgreSQL' )}
      `),
                { borderColor: '#FF9F43', padding: 1 }
            )
        }
    };

    console.log( `\n${projectDetails[ project ].title}` );
    console.log( projectDetails[ project ].content );
    setTimeout( showProjects, 1500 );
};

// Initialize CLI
showBanner();
setTimeout(mainMenu, 500);
