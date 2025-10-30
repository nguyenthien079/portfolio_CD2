import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Form, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";

function Blog() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    tags: "",
    readTime: "5 min read"
  });

  const initialBlogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "2024-10-15",
      excerpt: "Learn how to use React Hooks to manage state and side effects in functional components.",
      tags: ["React", "JavaScript", "Frontend"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js",
      date: "2024-09-20",
      excerpt: "A comprehensive guide to creating scalable RESTful APIs using Node.js and Express.",
      tags: ["Node.js", "Backend", "API"],
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Cloud Computing Best Practices",
      date: "2024-08-10",
      excerpt: "Essential practices for deploying and managing applications in the cloud.",
      tags: ["Cloud", "DevOps", "AWS"],
      readTime: "6 min read"
    }
  ];

  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const allTags = ["all", ...new Set(blogPosts.flatMap(post => post.tags))];
  const filteredPosts = selectedTag === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShowWriteModal = () => setShowWriteModal(true);
  const handleCloseWriteModal = () => {
    setShowWriteModal(false);
    setNewPost({
      title: "",
      excerpt: "",
      tags: "",
      readTime: "5 min read"
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newPost.title || !newPost.excerpt || !newPost.tags) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Create new blog post
    const post = {
      id: blogPosts.length + 1,
      title: newPost.title,
      date: new Date().toISOString().split('T')[0],
      excerpt: newPost.excerpt,
      tags: newPost.tags.split(',').map(tag => tag.trim()),
      readTime: newPost.readTime
    };

    // Add to blog posts
    setBlogPosts([post, ...blogPosts]);
    
    // Close modal and reset form
    handleCloseWriteModal();
    
    // Show success message
    alert("Bài viết đã được đăng thành công!");
  };

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Tech <strong className="purple">Blog </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
          Sharing knowledge and insights about technology
        </p>

        {/* FR-6.1: Write New Blog Post Button */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Button 
            variant="primary" 
            onClick={handleShowWriteModal}
            style={{
              padding: "10px 30px",
              fontSize: "1.1em",
              borderRadius: "25px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none"
            }}
          >
            <AiOutlinePlus style={{ marginRight: "8px", fontSize: "1.2em" }} />
            Viết Bài Mới
          </Button>
        </div>

        <div className="blog-filters" style={{ 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          gap: "10px", 
          marginBottom: "40px" 
        }}>
          {allTags.map((tag, index) => (
            <Button
              key={index}
              variant={selectedTag === tag ? "primary" : "outline-primary"}
              onClick={() => setSelectedTag(tag)}
              style={{
                borderRadius: "20px",
                padding: "8px 20px",
                textTransform: "capitalize"
              }}
            >
              {tag}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {filteredPosts.map((post) => (
            <Col md={6} lg={4} key={post.id} style={{ marginBottom: "30px" }}>
              <Card className="blog-card-view" style={{ height: "100%" }}>
                <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.9em", color: "#c770f0", marginBottom: "10px" }}>
                    {formatDate(post.date)}  {post.readTime}
                  </div>
                  
                  <Card.Title style={{ fontSize: "1.3em", marginBottom: "15px", fontWeight: "600" }}>
                    {post.title}
                  </Card.Title>
                  
                  <Card.Text style={{ textAlign: "justify", marginBottom: "15px", flexGrow: 1 }}>
                    {post.excerpt}
                  </Card.Text>
                  
                  <div style={{ marginBottom: "15px" }}>
                    {post.tags.map((tag, index) => (
                      <Badge key={index} bg="primary" style={{ marginRight: "5px" }}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="primary">
                    Read More 
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
            <h3>No posts found for this tag</h3>
          </div>
        )}
      </Container>

      {/* FR-6.1: Write Blog Post Modal */}
      <Modal show={showWriteModal} onHide={handleCloseWriteModal} size="lg" centered>
        <Modal.Header closeButton style={{ background: "#1a1a2e", borderColor: "#c770f0" }}>
          <Modal.Title style={{ color: "#c770f0" }}>
            <AiOutlineEdit style={{ marginRight: "10px" }} />
            Viết Bài Blog Mới
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#16213e", color: "white" }}>
          <Form onSubmit={handleSubmitPost}>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề bài viết *</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Nhập tiêu đề bài viết..."
                value={newPost.title}
                onChange={handleInputChange}
                required
                style={{ 
                  background: "#1a1a2e", 
                  color: "white", 
                  border: "1px solid #c770f0" 
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nội dung tóm tắt *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="excerpt"
                placeholder="Viết tóm tắt ngắn về bài viết..."
                value={newPost.excerpt}
                onChange={handleInputChange}
                required
                style={{ 
                  background: "#1a1a2e", 
                  color: "white", 
                  border: "1px solid #c770f0" 
                }}
              />
              <Form.Text style={{ color: "#c770f0" }}>
                Mô tả ngắn gọn về nội dung bài viết (2-3 câu)
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tags (Thẻ phân loại) *</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                placeholder="React, JavaScript, Frontend"
                value={newPost.tags}
                onChange={handleInputChange}
                required
                style={{ 
                  background: "#1a1a2e", 
                  color: "white", 
                  border: "1px solid #c770f0" 
                }}
              />
              <Form.Text style={{ color: "#c770f0" }}>
                Nhập các tag phân cách bằng dấu phẩy (ví dụ: React, Node.js, API)
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Thời gian đọc ước tính</Form.Label>
              <Form.Select
                name="readTime"
                value={newPost.readTime}
                onChange={handleInputChange}
                style={{ 
                  background: "#1a1a2e", 
                  color: "white", 
                  border: "1px solid #c770f0" 
                }}
              >
                <option value="3 min read">3 phút</option>
                <option value="5 min read">5 phút</option>
                <option value="7 min read">7 phút</option>
                <option value="10 min read">10 phút</option>
                <option value="15 min read">15 phút</option>
              </Form.Select>
            </Form.Group>

            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <Button 
                variant="secondary" 
                onClick={handleCloseWriteModal}
                style={{ marginRight: "10px" }}
              >
                Hủy
              </Button>
              <Button 
                variant="primary" 
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none"
                }}
              >
                Đăng Bài
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Blog;
