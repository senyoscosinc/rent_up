// Waitlist Form Handler with Supabase REST API
document.addEventListener('DOMContentLoaded', function() {
  const waitlistForm = document.querySelector('.waitlist-form');
  const submitBtn = document.querySelector('.waitlist-submit-btn');

  const SUPABASE_URL = 'https://icdpjpjegpojpacxzght.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_d68jeoC_AJkL0FGzmouvdw_xMoKFiQj';

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Collect form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const status = document.getElementById('join-status').value;
      const termsAgreed = document.getElementById('terms').checked;
      const betaSignup = document.getElementById('beta').checked;

      // Validate required fields
      if (!name || !email || !status) {
        alert('Please fill in all required fields.');
        return;
      }

      if (!termsAgreed) {
        alert('Please agree to receive updates before submitting.');
        return;
      }

      // Disable submit button to prevent duplicate submissions
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';

      try {
        // Insert data into Supabase using REST API
        console.log('Submitting data:', { name, email, phone, status, termsAgreed, betaSignup });
        
        const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            status,
            terms_agreed: termsAgreed,
            beta_signup: betaSignup
          })
        });

        console.log('Response status:', response.status);
        // parse JSON only if there is a body to avoid syntax errors on empty responses
        let data = null;
        const contentType = response.headers.get('Content-Type') || '';
        if (contentType.includes('application/json')) {
          try {
            data = await response.json();
            console.log('Response data:', data);
          } catch (parseErr) {
            // sometimes Supabase returns no body (204/201) which causes json() to fail
            console.warn('No JSON body to parse:', parseErr);
          }
        }

        if (!response.ok) {
          console.error('Supabase error details:', data);
          const errorMessage = data?.message || data?.error || 'Unknown error';
          alert(`Error: ${errorMessage}`);
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          return;
        }

        console.log('Success! Data inserted:', data);
        // show confirmation card instead of alert
        const successCard = document.querySelector('.success-card');
        if (successCard) {
          successCard.classList.add('open');
        }

        // Reset form and button state
        waitlistForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Close the waitlist modal after a short delay
        setTimeout(() => {
          const waitlistCard = document.querySelector('.waitlist-card');
          if (waitlistCard) {
            waitlistCard.classList.remove('open');
          }
        }, 500); // shorten since success card will appear

      } catch (error) {
        console.error('Network error:', error);
        alert('An unexpected error occurred. Check the console for details.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});
