import { useState, useMemo } from 'react';
import Countdown from 'react-countdown';
import { Button } from 'reactstrap';

interface ResendOtpRowProps {
  errorMessage: string;
  onResendOtp(): void;
}

function ResendOtpRow({ errorMessage, onResendOtp }: ResendOtpRowProps) {
  const [canResend, setCanResend] = useState(false);
  const [restartCountdown, setRestartCountdown] = useState(0); //just increment this to restart

  const resendOTP = () => {
    if (canResend || errorMessage) {
      setRestartCountdown((state) => state + 1);
      setCanResend(false);
      onResendOtp();
    }
  };

  const getCountdown = useMemo(
    () => (
      <Countdown
        key={restartCountdown}
        date={Date.now() + 120000}
        onComplete={() => setCanResend(true)}
        renderer={({ total }) => {
          if (canResend) return <span>0</span>;
          else return <span>{total / 1000}</span>;
        }}
      />
    ),
    [restartCountdown]
  );

  return (
    <div className="text-center font-14">
      <div className="resend-otp">
        <Button onClick={resendOTP} disabled={!canResend && !errorMessage}>
          Resend OTP
        </Button>
      </div>
      <div>
        {errorMessage ? (
          // <span className="red">{errorMessage}</span>
          <span>The OTP can be resent after 2 Minutes</span>
        ) : (
          // <span className="opacity-07">{getCountdown} seconds left before you can resend an OTP</span>
          <span>The OTP can be resent after {getCountdown} seconds</span>
        )}
      </div>
    </div>
  );
}

export default ResendOtpRow;
