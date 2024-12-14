import { useState, useEffect } from "react";

export const Countdown = () => {
    // Function to calculate the time remaining until Christmas
    const calculateCountdown = () => {
        const currentYear = new Date().getFullYear();
        const christmasDate = new Date(`December 25, ${currentYear} 00:00:00`);
        const currentDate = new Date();
        const difference = christmasDate - currentDate;

        // Calculate days, hours, minutes, and seconds remaining
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
                isChristmas: false,
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isChristmas: true,
            };
        }
    }

    const [countdown, setCountdown] = useState(calculateCountdown());

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div id="countdown-container" style={{ textAlign: 'center'}}>
            {countdown.isChristmas ? (
                    <div id="countdown">¡Feliz Navidad! 🎉</div>
            ) : (
                <>
                    <div className="phrase phrase-top">Quedan solo</div>
                    <div id="countdown">
                        <div className="countdown-item">
                            <span className="highlight">{countdown.days}</span>
                            <span className="label">
                                {countdown.days === 1 ? ' día' : ' días'}
                            </span>
                        </div>
                        <div className="countdown-item">
                            <span className="highlight">{countdown.hours}</span>
                            <span className="label">
                                {countdown.hours === 1 ? ' hora' : ' horas'}
                            </span>
                        </div>
                        <div className="countdown-item">
                            <span className="highlight">{countdown.minutes}</span>
                            <span className="label">
                                {countdown.minutes === 1 ? ' minuto' : ' minutos'}
                            </span>
                        </div>
                        <div className="countdown-item">
                            <span className="highlight">{countdown.seconds}</span>
                            <span className="label">
                                {countdown.seconds === 1 ? ' segundo' : ' segundos'}
                            </span>    
                        </div>
                    </div>
                    <div className="phrase phrase-bottom">para Navidad</div>
                </>
            )}
        </div>
    )
}